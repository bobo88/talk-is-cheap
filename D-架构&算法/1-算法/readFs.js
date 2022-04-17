/**
 * author: Bob
 * date: 2022-04-16
 */
const path = require('path')
const fs = require('fs')

let entryFiles = []
/**
 * @description
 * path.resolve(...pathSegments: string[]): string
 * @param 参数是一串字符串，返回一个绝对路径
 * 比如 path.resolve(`${__dirname}`, '../../assets')
 * __dirname是nodejs下的一个全局变量，可以获得当前文件所在目录的完整目录名
 * 相当于从当前文件的目录 cd ../../assets/，获取这个assets目录的绝对路径
 */
const dirPath = path.resolve(`${__dirname}`, './src/');

fileDisplay(dirPath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
  // 根据文件路径读取文件，返回一个文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.warn(err);
      return;
    }
    // 遍历读取到的文件列表
    files.forEach(filename => {
      // path.join得到当前文件的绝对路径
      const filepath = path.join(filePath, filename);

      // 同步方式
      try {
        const stats = fs.statSync(filepath)
        // console.log(88888, stats)
        const isFile = stats.isFile(); // 是否为文件
        const isDir = stats.isDirectory(); // 是否为文件夹
        if (isFile) {
          // 获取文件名(包含后缀)
          let filename =  path.basename(filepath);
          // 获取后缀名，包含点(在path.basename中就有ext)
          let extname = path.extname(filepath);
          // 获取文件名(不包含后缀) 第二个参数即要删除的后缀
          let basename = path.basename(filepath, extname);
          console.log(filepath, basename); //如果是文件，输出它的路径咯～
          let basenameArr = basename.split('_');
          // 只有 .ts 文件才能保存起来
          if(extname === '.ts') {
            entryFiles.push({
              key: basenameArr[0],
              name: basenameArr.length === 2 ? basenameArr[1] : basename
            })
          }
        }
        if (isDir) {
          fileDisplay(filepath); // 递归，如果是文件夹，就继续遍历该文件夹里面的文件；
        }
      } catch (error) {
        console.log('########### 出现异常 #############', error)
      }
      //#region
      // // 根据文件路径获取文件信息
      // fs.stat(filepath, (error, stats) => {
      //   if (error) {
      //     console.warn('获取文件stats失败');
      //     return;
      //   }
      //   const isFile = stats.isFile(); // 是否为文件
      //   const isDir = stats.isDirectory(); // 是否为文件夹
      //   if (isFile) {
      //     // 获取文件名(包含后缀)
      //     let filename =  path.basename(filepath);
      //     // 获取后缀名，包含点(在path.basename中就有ext)
      //     let extname = path.extname(filepath);
      //     // 获取文件名(不包含后缀) 第二个参数即要删除的后缀
      //     let basename = path.basename(filepath, extname);
      //     console.log(filepath, basename); //如果是文件，输出它的路径咯～
      //     let basenameArr = basename.split('_')
      //     entryFiles.push({
      //       key: basenameArr[0],
      //       name: basenameArr.length === 2 ? basenameArr[1] : basename
      //     })
      //   }
      //   if (isDir) {
      //     fileDisplay(filepath); // 递归，如果是文件夹，就继续遍历该文件夹里面的文件；
      //   }
      // });
      //#endregion
    });
    console.log('********** 所有TS文件名称： ************', entryFiles)
    let entryFilesObj = {};
    entryFiles.map(item => {
      entryFilesObj['ts_' + item.key] = './src/' + item.key + '_' + item.name + '.ts'
    })
    console.log('~~~~~~~~~~~~~~ entryFilesObj ~~~~~~~~~~~~~~~~~~~~~~~~', JSON.stringify(entryFilesObj))
    let writeContent = `module.exports = ${JSON.stringify(entryFilesObj)}`;
    // 将读取的 src 目录下的ts文件信息 写入 tsfile.js 里面
    fs.writeFile(`${__dirname}` + '/tsfile.js', writeContent, err => {
      if (err) {
        console.error(err)
        return
      }
      //文件写入成功。
    })
  });
}

module.exports = entryFiles