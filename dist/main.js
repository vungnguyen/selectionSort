"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort_1 = require("./selectionSort");
selectionSort_1.SelectionSort.selectionSort(selectionSort_1.SelectionSort.list);
for (let i = 0; i < selectionSort_1.SelectionSort.list.length; i++) {
    console.log(selectionSort_1.SelectionSort.list[i] + ' ');
}
