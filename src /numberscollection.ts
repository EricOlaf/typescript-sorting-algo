export class NumbersCollection{
    constructor(public data: number[]){}

    //the get kw allows us to not have to call this with parens. rather just access it with name.length.
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}

const collection = new NumbersCollection([2, 3, 5]);
collection.length;