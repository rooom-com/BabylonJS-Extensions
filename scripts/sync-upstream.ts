import { promises as fs } from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';
import * as glob from 'glob';

const execAsync = promisify(exec);

const config = {
  upstreamRepo: 'https://github.com/BabylonJS/Babylon.js.git',
  upstreamBranch: 'master',
  packagesDir: 'packages/dev',
  sourceDir: 'packages/dev/addons/src/htmlMesh',
  targetDir: 'src',
};

const transformImport = (content: string, importMappings: string[]) => {
  return content
    .replace(/from ['"]([^'"]+)['"]/g, (match, importPath) => {
      const mappedImport = importMappings.find(mapping => importPath.startsWith(mapping));
      return mappedImport ? `from '@babylonjs/${importPath}'` : match;
    })
    .replace(/import\(['"]([^'"]+)['"]\)/g, (match, importPath) => {
      const mappedImport = importMappings.find(mapping => importPath.startsWith(mapping));
      return mappedImport ? `import('@babylonjs/${importPath}')` : match;
    });
}

async function syncUpstream(): Promise<void> {
  const tempDir = path.join(process.cwd(), 'temp-upstream');
  
  try {
    console.log('🔄 Starting sync process...');
    
    await fs.mkdir(tempDir, { recursive: true });
    
    console.log('📥 Cloning upstream repository...');
    await execAsync(
      `git clone --depth 1 --branch ${config.upstreamBranch} ${config.upstreamRepo} ${tempDir}`
    );
    
    const packagesPath = path.join(tempDir, config.packagesDir);
    const sourcePath = path.join(tempDir, config.sourceDir);
    const targetPath = path.join(process.cwd(), config.targetDir);

    let importMappings: string[] = [];

    try {
      await fs.access(packagesPath);
      importMappings.push(...(await fs.readdir(packagesPath)))
    } catch {
      throw new Error(`Packages directory not found: ${config.packagesDir}`);
    }
    
    try {
      await fs.access(sourcePath);
    } catch {
      throw new Error(`Source directory not found: ${config.sourceDir}`);
    }
    
    const backupDir = `${targetPath}-backup-${Date.now()}`;
    console.log('📦 Creating backup...');
    await fs.cp(targetPath, backupDir, { recursive: true });
    
    console.log('🔄 Copying files...');
    await fs.rm(targetPath, { recursive: true, force: true });
    await fs.cp(sourcePath, targetPath, { recursive: true });

    const files = glob.sync(`${targetPath}/**/*.ts`);
    for (const file of files) {
      const content = await fs.readFile(file, 'utf8');
      const transformedContent = transformImport(content, importMappings);
      await fs.writeFile(file, transformedContent);
    }
    
    console.log('✅ Sync completed successfully!');
    console.log(`📁 Backup created at: ${backupDir}`);
    
  } catch (error) {
    console.error('❌ Error during sync:', error);
    throw error;
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

if (require.main === module) {
  syncUpstream().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

export { syncUpstream };