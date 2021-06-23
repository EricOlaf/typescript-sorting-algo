"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        // //the get kw allows us to not have to call this with parens. rather just access it with name.length.
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        // const leftHand = this.data[leftIndex];
        // this.data[leftIndex] = this.data[rightIndex];
        // this.data[rightIndex] = leftHand;
        var arr = this.data.split('');
        var leftHand = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = leftHand;
        this.data = arr.join('');
        //     console.log('SPLIT', this.data.split(''));)
        //    this.data.split('').splice(leftIndex, 2, this.data[rightIndex], this.data[leftIndex]).join();
        //    console.log('return val', this.data)
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
