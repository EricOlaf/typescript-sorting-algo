"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var numberscollection_1 = require("./numberscollection");
var characterscollection_1 = require("./characterscollection");
var numColl = new numberscollection_1.NumbersCollection([10, 28, 3, -5, 0, -8]);
var sorter = new sorter_1.Sorter(numColl);
sorter.sort();
console.log(numColl.data);
console.log(numColl.length);
console.log('sorted', sorter.collection);
var charColl = new characterscollection_1.CharactersCollection('EricOlaveson');
var sorter2 = new sorter_1.Sorter(charColl);
sorter2.sort();
console.log(charColl.data);
console.log(charColl.length);
console.log('sorted CHARS', sorter2.collection);
// const numColl = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numColl);
// sorter.sort();
// console.log('SORTED', sorter.collection);
//FOR NUMBERS ONLY
// class Sorter { 
//     constructor(public collection: number[]){}
//     sort(): void {
//         const {length} = this.collection;
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - 1; j++){
//                 const left = this.collection[j];
//                 const right = this.collection[j+1];
//                 if(left > right){
//                     this.collection.splice(j, 2,right, left)
//                 }
//             }
//         }
//     }
// }
// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);
