import merge from "../src/merge";


describe('Test Merge Function', () => {
    
    test('Test #1', () => {
        const collection_1 = [1,4,5,8,10];
        const collection_2 = [2,3,6,7,9];
        const arraysort = merge(collection_1,collection_2);
        expect(arraysort).toEqual([1,2,3,4,5,6,7,8,9,10])
    });

    test('Test #2', () => {
        const collection_1 = [1,4,5,8,10];
        const collection_2 : number[]= [];
        const arraysort = merge(collection_1,collection_2);
        expect(arraysort).toEqual([1,4,5,8,10])
    });

    test('Test #3', () => {
        const collection_1 : number[]= [];
        const collection_2 = [1,2,5,6,7];
        const arraysort = merge(collection_1,collection_2);
        expect(arraysort).toEqual([1,2,5,6,7])
    });

    test('Test #4', () => {
        const collection_1 = [1,3,4,5];
        const collection_2 = [2,6,7];
        const arraysort = merge(collection_1,collection_2);
        expect(arraysort).toEqual([1,2,3,4,5,6,7])
    });

    test('Test #5', () => {
        const collection_1 : number[]= [];
        const collection_2 : number[]= [];
        const arraysort = merge(collection_1,collection_2);
        expect(arraysort).toEqual([])
    });

});
