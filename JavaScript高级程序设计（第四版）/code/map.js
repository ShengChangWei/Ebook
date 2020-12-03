/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-01 19:07:06
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-01 19:12:53
 * @Description: file content
 */

 const m = new Map([['name', 'sheng'], ['age', 23]]); // 注意这点事二维数组

 for(let pair of m.entries()) {
  console.log(pair)
 }