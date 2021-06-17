"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var numberscollection_1 = require("./numberscollection");
var numColl = new numberscollection_1.NumbersCollection([10, 28, 3, -5, 0, -8]);
var sorter = new sorter_1.Sorter(numColl);
sorter.sort;
console.log(numColl.data);
console.log(numColl.length);
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
