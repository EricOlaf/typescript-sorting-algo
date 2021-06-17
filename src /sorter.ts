import {NumbersCollection} from './numberscollection';
export class Sorter { 
    constructor(public collection: NumbersCollection ){}
    sort(): void {
        const {length} = this.collection;

        
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++){
                const left = this.collection[j];
                const right = this.collection[j+1];
                if(left > right){
                    this.collection[j] = right;
                    this.collection[j+1] = left;
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);