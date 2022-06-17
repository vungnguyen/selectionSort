export class SelectionSort{
    static list: number[] = [1,9,4,5,6,6,5,7,-4.5];
    public static selectionSort(list: number[]): void{
        for (let i = 0; i < list.length -1; i++) {
            let min: number = list[i];
            let minIndex: number = i;
            for (let j = i+1; j < list.length ; j++){
                if(min > list[j]){
                    min = list[j];
                    minIndex = j;
                }
            }
            if (minIndex != -1){
                list[minIndex] = list[i];
                list[i] = min;
            }
        }
    }
}