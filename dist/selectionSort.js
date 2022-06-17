"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
class SelectionSort {
    static selectionSort(list) {
        for (let i = 0; i < list.length - 1; i++) {
            let min = list[i];
            let minIndex = i;
            for (let j = i + 1; j < list.length; j++) {
                if (min > list[j]) {
                    min = list[j];
                    minIndex = j;
                }
            }
            if (minIndex != -1) {
                list[minIndex] = list[i];
                list[i] = min;
            }
        }
    }
}
exports.SelectionSort = SelectionSort;
SelectionSort.list = [1, 9, 4, 5, 6, 6, 5, 7, -4.5];
