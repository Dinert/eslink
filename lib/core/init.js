const program = require("commander");
const fs = require('fs')
const path = require('path')
const { spawn } = require("child_process");


const spawnCommand = (...args) => {
  return new Promise((resolve, reject) => {
     const childProcess = spawn(...args);
     childProcess.stdout.pipe(process.stdout);
     childProcess.stderr.pipe(process.stderr);
     childProcess.on("close", () => {
         resolve();
     });
  });
 }

const init = () => {
  program.command("install").description('初始化代码规范').action(async () => {
    
    // 获取当前目录下的文件
    const a = await fs.promises.readFile('.gitignore', {encoding: 'utf8'})
    console.log(a)

    // 执行npm install
    // const npm = process.platform === "win32" ? "npm.cmd" : "npm"; // window和ios兼容 
    // await spawnCommand(npm, ['install'])

  })
}

module.exports = init