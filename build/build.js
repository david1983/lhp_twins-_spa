// https://github.com/shelljs/shelljs
require('./check-versions')()

// process.env.NODE_ENV = 'production'
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var s3 = require('s3');

var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: "AKIAIXD7LMRIVZRJZJJA",
    secretAccessKey: "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",
    // any other options are passed to new AWS.S3()
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  },
});

var params = {
  localDir: "./dist",
  deleteRemoved: true, // default false, whether to remove s3 objects
                       // that have no corresponding local file.

  s3Params: {
    Bucket: "lph-twins",
    Prefix: "",
    // other options supported by putObject, except Body and ContentLength.
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
  },
};


var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))

  var uploader = client.uploadDir(params);
  uploader.on('error', function(err) {
    console.error("unable to sync:", err.stack);
  });
  uploader.on('progress', function() {
    console.log("progress", uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function() {
    console.log("done uploading");
  });
})
