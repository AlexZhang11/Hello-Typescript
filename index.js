"use strict";
/*
回调函数
*/
exports.__esModule = true;
// interface printCallBack{
//     (number1:number,number2:number):number
// }
// let printCallBack:printCallBack = (number1,number2)=>{
//     return number1+number2
// }
// interface Person{
//     firstName:string
//     print(callback:printCallBack):number
// }
// let person:Person={
//     firstName:'haha',
//     print:function(callback:printCallBack){
//       let res =   callback(2,11)
//         console.log(res,'res') ;
//         return res
//     }
// }
// person.print(printCallBack)
/**
 * 类型断言
 */
// let s:any = 'hello world'
// let tempS = (<string>s).substr(0,5)
// let tempSOther = (s as string).substr(0,5)
// let tempNoChange = s.substr(0,5)
// console.log(tempS,'tempS')
// console.log(tempSOther,'tempSOther')
// console.log(tempNoChange,'tempNoChange')
// function getSomeThingLength(something:string | number){
// return (<string>something).length
// }
/**
 * 定义复杂类型
 */
// interface State{
//     color:string,
//     obj:{
//         [selector:string]:State,
//     }
// }
// let state1:State={
//     color:'red',
//     obj:{
//         'selector':{
//             color:'blue',
//             obj:{}
//         }
//     }
// }
/**
 * ...restParams
 */
// const add = (number1:number,...restParams)=>{
//     console.log(restParams)
// }
// add(1,2,3)
/**
 * get set关键字
 */
//  class Person{
//      private _name:string
//      constructor(name){
//          this._name = name
//         }
//      get nameAll(){
//         return  this._name
//      }
//      set nameAll(name){
//          this._name = name
//      }
//  }
//  let p1= new Person('haha');
//  console.log(p1.nameAll)
//  p1.nameAll = 'aaa'
// console.log(p1.nameAll)
/**
 * arg is number是在编译时期判断的
 * typeof是在执行期间判断的
 */
// function isCar(arg:number|string):arg is number{
//     typeof arg ==='number'
//     return 
// }
/**
 * instanceof判断对象属于自定义类型
 */
// class Car {
// }
// let car = new Car();
// console.log(car instanceof Car)
/**
 * interface可以重复申明
//  */
// interface Person{
//     name:string
// }
// interface Person{
//     age:number 
// }
// let p :Person={
//     name:'',
//     age:1
// } 
/**
 * 编译class和static 编译成js之后的形式
 */
// class Person{
//     static firstName:string = 'hahahah'
//     static getName(){
//         console.log()
//     }
// }
/**
 * never 不期待返回值
 * void 返回值为空
 */
//  function Add():void{
//      console.log('void');
//  }
//  let a = Add();
//  console.log(a)
//  function NeverShow():never{
//      while(true){
//      }
//  }
//  function NeverShow1():never{
//    throw new Error('111111')}
//    let o1 = NeverShow();
//    let o2 = NeverShow1();
//    console.log(o1,o2)
/**
 * es6写法定义函数在es5中的编译结果
 */
// class Person{
//     getName(){
//         console.log('haha')
//     }
// }
/**
 * 泛型 ：函数，接口，类定义时不指定具体类型，使用时才决定
 */
//  function getArray<T>(items:T[]):T[]{
//      return items
//  }
//  let myNumberArray = getArray<number>([100,200,300])
//  let myStringArray = getArray<string>(['hello','world'])
//  let myBooleanArray = getArray([true,false])//会做类型推断成Boolean 但是不提倡
//  console.log(myNumberArray)
//  console.log(myStringArray)
//  console.log(myBooleanArray)
//  myNumberArray.push(400)
//  myStringArray.push('HAHA')
//  myBooleanArray.push(true)
//  console.log(myNumberArray)
//  console.log(myStringArray)
//  console.log(myBooleanArray)
/**
 * 类和函数组合泛型
 */
// class Pair<F,S>{
//     _first:F[]
//     _second:S[]
//     constructor(first:F[],second:S[]){
//         this._first = first,
//         this._second = second
//     }
//     get nameF():F[]{
//         return this._first
//     }
//     get nameS():S[]{
//         return this._second
//     }
// }
// let pair = new Pair<number,string>([1],['1'])
// console.log(pair._first)
// console.log(pair._second)
// console.log(pair.nameF)
// console.log(pair.nameS)
// function getNumberArray<F,S>(items:F[],items1:Pair<F,S>):F[]{
//    return items.concat(items1.nameF)
// }
// let numberArr = getNumberArray<number,string>([1,2,3,4],new Pair([55],['1']))
// console.log(numberArr)
/**
 *接口泛型匿名函数
 */
// interface ShowArr{
//     <T>(items:T[]):T[]
// }
// function showarr<T>(items:T[]):T[]{
//     return items
// }
// let sa:ShowArr=showarr//sa是一个函数
// console.log(sa<number>([1,2,3]))
/**
 * 多个接口泛型
//  */
// interface Pair<F,S>{
//     first:F,
//     second:S
// }
// interface  State<F,S>{
//     [propName:string]:Pair<F,S>
// }
// let s: State<number,string> = {
//     's1':{
//         first:19,
//         second:'jaha'
//     }
// }
/**
 * 拓展运算符
 */
//  function add (x:number,y:number,z:number){
//      return x+y+z
//  }
//  console.log(add.apply(null,[1,2,3]))
//  console.log((<any>add)(...[1,2,3]))
//  function add1(...arg:number[]){
//      return arg[0]+arg[1]+arg[2]
//  }
//  console.log(add1(...[1,2,3]))
/**
 * 解构
 */
// var [x,y,...arg] = [1,2,3,4,5]
// console.log(x)
// console.log(y)
// console.log(arg)
// //后面的会覆盖前面相同的值
// const print2D = {x:1,y:2}
// const print3D = {...print2D,x:3,z:5}
// const print4D = {x:3,z:5,...print2D}
// console.log(print3D)
// console.log(print4D)
/**
 *
 * 拓展运算符入参
 */
// function add (...args){//args是个数组,...拓展运算符将他展开了，不展开的话展示结果是一个数组
//     console.log('拓展运算符入参',...args)
// }
// add ({a:1,b:2}) //[ { a: 1, b: 2 } ]
/**
 *
 * keyof 取值范围是里面的属性
 */
//  class Test {
//      x:number=8
//  }
//  let t = new Test()
//  function getProp(a:keyof Test,b:Test){
//      console.log(a,b)
//  }
//  getProp('x',t)
/**
 * keyof+泛型
 */
// interface Shapes{
//      draw():void
//  }
//  class Circle implements Shapes{
//     draw(){
//         console.log('drawCircle')
//     }
//  }
//  class Rectangle implements Shapes{
//     draw(){
//         console.log('drawRectangle')
//     }
//  }
//  function drawShaps<S extends Shapes>(shapes:S[]){//泛型S继承接口Shapes要先实现接口（可以使用类或者对象），参数shapes是实现了接口Shapes的类的实例对象的数组
//     console.log(shapes,'入参')
//     shapes.forEach(shape=>shape.draw())
//  }
// let circle =new Circle();
// let rectangle = new Rectangle();
// drawShaps([circle,rectangle])
/**
 *
 *泛型加构造函数约束
 */
// function createInstance<T>(t:new (constructorarg)=>T,arg:number):T{
//     //入参里面要传入的就是一个类名，可以实例化的类名,因为new后面不带参数，所以类里面也不能带参数constructor
//     return new t(arg)
// }
// class Test{
//     x:number = 4
//     constructor(x:number){
//         this.x = x
//     }
// }
// let t = createInstance<Test>(Test,1)
// console.log(t)//Test { x: 1 }
/**
 * 类型别名+泛型
 *
 *对象实现多个接口用&链接两个接口
 */
//  interface Items{
//      name:string,
//      age:number
//  }
//  type Entity<E>={
//      id:number
//  }&E//&表示左边右边都要
//  let entity:Entity<Items>={id:1,name:'haha',age:19}
//  interface A{
//     name:string 
//  }
//  interface B{
//      age:number
//  }
//  let c :A&B={
//      name:'haha',
//      age:19
//  }
// 实现一个网络请求方法，在失败时会隔一段时间重试。
// 重试时间为斐波那契数列，以秒作为单位。
var moment_1 = require("moment");
function fetchApi(url) {
    console.log("fetch at", moment_1["default"]().format("HH:ss"));
    return Promise.reject("Network error: " + url);
}
function doFetch(url, retryTimes) {
    if (retryTimes === void 0) { retryTimes = 0; }
    return fetchApi(url);
}
doFetch("https://codesandbox.io/");
