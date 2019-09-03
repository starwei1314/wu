#1.全局安装gulp   npm install -g gulp gulp-cli
#2.安装目录下的依赖  npm install
#3.开发环境运行 npm run jwdev
#4.打包 npm run jwbuild （会生成一个dist目录）

#支持功能
#支持less写法，开发环境下不刷新实时编译
#html,css,js,图片压缩
#本地http服务运行，在gulpfile.js下可以看到端口号默认是4500，启动的地址默认为localhost，你可以改为你本机ip地址，eg: 172.16.6.229

#src文件夹下目录说明
#1、html文件都放在src根目录下
#2、src下images目录是存放 图片视频文件
#3、src下styles目录是存放 .less文件
#4、src下plugin目录是存放在你找到的插件文件不需要更改的
#5、src下js目录是存放 .js文件