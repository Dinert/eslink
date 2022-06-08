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

    // 获取templdate目录下的文件
    const templatePath = path.resolve(__dirname, '../template');
    const paths = await fs.promises.readdir(templatePath)
    for (let i = 0; i < paths.length; i++) {
      const data = await fs.promises.readFile(templatePath + '/' + paths[i], { encoding: 'utf8' })
      await fs.promises.writeFile(paths[i], data) // 写入到当前目录
    }

    // 执行npm install
    const npm = process.platform === "win32" ? "npm.cmd" : "npm"; // window和ios兼容
    const packages = ['eslint', 'babel-eslint', 'eslint-plugin-vue', '@vue/eslint-config-standard', 'stylelint', 'stylelint-scss', 'stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue', 'stylelint-order', 'postscss', 'postscss-html']
    for (let i = 0; i < packages.length; i++) {
      await spawnCommand(npm, ['install', packages[i], '--save-dev'])
    }

  })
}

module.exports = init