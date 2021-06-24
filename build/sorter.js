"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable{
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number):void;
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // constructor(public collection: Sortable ){}
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// const numColl = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numColl);
// sorter.sort();
// console.log('SORTED', sorter.collection);
