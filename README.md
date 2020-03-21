<h1>TypeScript有关<h1>    
  
<h3>一些相关命令</h3>

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

```
{
    "compilerOptions":{
        target:"es5"
    },
    "include":[
        "*.ts"
    ]
}
```

运行时使用tsc&&node.index.js即可

tsc--init 可以初始化tsconfig.json文件

tsc +文件名会忽略tsconfig.json的配置文件。tsc不会

npm init 会生成初始的package.json文件





<h3>总结interface和type的区别</h3>

<p>1 二者都可以定义类型<p>

<p>2 interface可以使用extends/implements,type不行(接口继承一个或多个接口，类实现一个或多个接口)</p>'

```
interface Car{
    name：string
}
interface Bike{
    mile:string 
}
interface DZ extends Car,Bike{

}
class BT implements Car,Bike{

}

```

<p>3 二者都可以对一个对象添加几个type 或者interface,但是interface 可以重复命名，type不行</p>

```
type P = {
    name:string,
    print():void,
}
type Car  = {
    mile:string
}
interface DZ{
    age:number
}
interface bike{

}
interface DZ{
    age1:number
}
let o:P&Car&DZ&bike={
    name:'1',
    mile:'111',
    print:function(){

    },
    age:1,
    age1:1
}
```

<p>4 type 可以直接作用于基本类型,联合类型,interface 不行</p>

```
type Name = string; // 基本类型
type NameResolver = () => string; // 函数
type NameOrResolver = Name | NameResolver; // 联合类型（在interface中其实就是接口继承接口来实现）

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {//为string时
        return n;
    } else {//为函数时
        return n();
    }
}
```
