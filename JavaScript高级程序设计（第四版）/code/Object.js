/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2020-12-03 18:59:13
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2020-12-03 19:00:49
 * @Description: file content
 */

let book = {};
Object.defineProperties(book, {
  year_: {
    value: 2017
  },

  edition: {
    value: 1
  },

  year: {
    get: function () {
      return this.year_;
    },

    set: function (newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    }
  }
});

let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
let descriptoes = Object.getOwnPropertyDescriptors(book);
console.log(descriptor)
console.log(descriptoes)