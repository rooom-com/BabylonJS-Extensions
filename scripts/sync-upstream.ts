// scripts/sync/sync-upstream.ts
import { promises as fs } from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

const config = {
  upstreamRepo: 'https://github.com/BabylonJS/Babylon.js.git',
  upstreamBranch: 'master',
  sourceDir: 'packages/dev/addons/src/htmlMesh',
  targetDir: 'src'
};

async function syncUpstream(): Promise<void> {
  const tempDir = path.join(process.cwd(), 'temp-upstream');
  
  try {
    console.log('🔄 Starting sync process...');
    
    // Create temp directory
    await fs.mkdir(tempDir, { recursive: true });
    
    // Clone upstream repository
    console.log('📥 Cloning upstream repository...');
    await execAsync(
      `git clone --depth 1 --branch ${config.upstreamBranch} ${config.upstreamRepo} ${tempDir}`
    );
    
    const sourcePath = path.join(tempDir, config.sourceDir);
    const targetPath = path.join(process.cwd(), config.targetDir);
    
    // Ensure source directory exists
    try {
      await fs.access(sourcePath);
    } catch {
      throw new Error(`Source directory not found: ${config.sourceDir}`);
    }
    
    // Create backup of current state
    const backupDir = `${targetPath}-backup-${Date.now()}`;
    console.log('📦 Creating backup...');
    await fs.cp(targetPath, backupDir, { recursive: true });
    
    // Sync directories
    console.log('🔄 Copying files...');
    await fs.rm(targetPath, { recursive: true, force: true });
    await fs.cp(sourcePath, targetPath, { recursive: true });
    
    console.log('✅ Sync completed successfully!');
    console.log(`📁 Backup created at: ${backupDir}`);
    
  } catch (error) {
    console.error('❌ Error during sync:', error);
    throw error;
  } finally {
    // Cleanup
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

// Run sync if called directly
if (require.main === module) {
  syncUpstream().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

export { syncUpstream };