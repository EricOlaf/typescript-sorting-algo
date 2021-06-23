export class CharactersCollection {
    constructor(public data: string){}

    // //the get kw allows us to not have to call this with parens. rather just access it with name.length.
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        console.log('left', this.data.toLowerCase()[leftIndex])
        console.log('right', this.data.toLowerCase()[rightIndex])
        return this.data.toLowerCase()[leftIndex] > this.data.toLowerCase()[rightIndex];
    }
    
    swap(leftIndex: number, rightIndex: number): void {
        // const leftHand = this.data[leftIndex];
        // this.data[leftIndex] = this.data[rightIndex];
        // this.data[rightIndex] = leftHand;
        const arr = this.data.split('');
        const leftHand = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = leftHand;
        this.data = arr.join('')
    //     console.log('SPLIT', this.data.split(''));)
    //    this.data.split('').splice(leftIndex, 2, this.data[rightIndex], this.data[leftIndex]).join();
    //    console.log('return val', this.data)
    }
}