var glob = require('glob');
var chalk = require('chalk');
var qiniu = require("qiniu");
var path = require('path');
var shell = require('shelljs');
var config = require('../config/pub.config.js');
var files = glob.sync('./dist/**/*.*');
var length = files.length;
var index = 0;
for (var i = files.length - 1; i >= 0; i--) {
  upploadQiniu(files[i]);
}

function upploadQiniu(file, i) {
  //需要填写你的 Access Key 和 Secret Key
  qiniu.conf.ACCESS_KEY = config.ak;
  qiniu.conf.SECRET_KEY = config.sk;
  //要上传的空间
  bucket = config.bucketName;
  //上传到七牛后保存的文件名
  key = file.replace(/\.\//, '');
  function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}
//生成上传 Token
token = uptoken(bucket, key);
//要上传文件的本地路径
filePath = file;
//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        index++;
        console.log(chalk.green(file + '  success! \n')); 
        if(index == length) {
          var publishPath = path.resolve(__dirname, config.htmlPath);
          publishPath = path.join(publishPath, '../');
          shell.cp(path.resolve(__dirname, '../dist/index.html'), path.resolve(__dirname, config.htmlPath));
          shell.cd(publishPath);
          shell.exec('svn add index.html');
          // var out = shell.exec('svn commit -m "auto pub"');
          // console.log(out.stdout);
        }
      } else {
        // 上传失败， 处理返回代码
        console.log(chalk.red(file + 'error'));
      }
  });
}
//调用uploadFile上传
uploadFile(token, key, filePath);
}