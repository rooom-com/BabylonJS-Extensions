const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');
const glob = require('glob');

const execAsync = promisify(exec);

const config = {
  upstreamRepo: 'https://github.com/BabylonJS/Babylon.js.git',
  upstreamBranch: 'master',
  packagesDir: 'packages/dev',
  sourceDir: 'packages/dev/addons/src/htmlMesh',
  targetDir: 'src',
};

const transformImport = (content, importMappings) => {
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

async function syncUpstream() {
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

    let importMappings = [];

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

module.exports = { syncUpstream };