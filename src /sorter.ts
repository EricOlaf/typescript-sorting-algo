import {NumbersCollection} from './numberscollection';
interface Sortable{
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number):void;
}
export abstract class Sorter { 
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract length: number;
    abstract swap(leftIndex: number, rightIndex: number): void;
    // constructor(public collection: Sortable ){}
    sort(): void {
        const {length} = this;

        
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++){
                
                if(this.compare(j, j+1)){
                    this.swap(j, j+1);
                }
            }
        }
    }
}

// const numColl = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numColl);
// sorter.sort();
// console.log('SORTED', sorter.collection);
