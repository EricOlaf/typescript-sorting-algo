import {Sorter} from './sorter';
import {NumbersCollection} from './numberscollection';
import { CharactersCollection } from './characterscollection';

const numColl = new NumbersCollection([10, 28, 3, -5, 0, -8]);
const sorter = new Sorter(numColl);
sorter.sort();
console.log(numColl.data);
console.log(numColl.length);
console.log('sorted', sorter.collection);

const charColl = new CharactersCollection('EricOlaveson')
const sorter2 = new Sorter(charColl);
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
