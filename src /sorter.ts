import {NumbersCollection} from './numberscollection';
export class Sorter { 
    constructor(public collection: NumbersCollection ){}
    sort(): void {
        const {length} = this.collection;

        
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++){
                
                if(this.collection.compare(j, j+1)){
                    this.collection.swap(j, j+1);
                }
            }
        }
    }
}

// const numColl = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numColl);
// sorter.sort();
// console.log('SORTED', sorter.collection);
