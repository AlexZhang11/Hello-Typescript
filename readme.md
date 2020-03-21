前提：安装ts npm  install -g typescript ,安装node
tsc index.ts(要转换的ts文件名) 可以编译生成对应js文件
随时监控编译ts文件可以使用 tsc -w index.ts
node index.js 可以在控制台运行出编译后的ts文件的内容

直接与运行ts文件不编译可以安装ts-node npm install -g ts-node
执行ts-node index.ts 文件

随时监控编译运行ts文件可以安装nodemon npm install -g nodemon
运行 nodenom --exec ts-node index.ts

如果要在class里面使用set get关键字 要先按照es5或6编译tsc --target es5(es6) index.ts
或者加一个配置文件tsconfig.json
配置内容为
{
    "compilerOptions":{
        target:"es5"
    },
    "include":[
        "*.ts"
    ]
}
c
运行时使用tsc&&node.index.js即可


tsc--init 可以初始化tsconfig.json文件

tsc +文件名会忽略tsconfig.json的配置文件。tsc不会

npm init 会生成初始的package.json文件
