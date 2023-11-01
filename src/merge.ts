function merge(collection_1: number[], collection_2: number[]): number[] {
    let arraysort: number[] = [];
    let i = 0;
    let j = 0;

    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            arraysort.push(collection_1[i]);
            i++;
        } else {
            arraysort.push(collection_2[j]);
            j++;
        }
    }

    while (i < collection_1.length) {
        arraysort.push(collection_1[i]);
        i++;
    }

    while (j < collection_2.length) {
        arraysort.push(collection_2[j]);
        j++;
    }

    return arraysort;
}

export default merge;