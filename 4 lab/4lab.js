function sum(...args) {

    let sumFor = 0;
    for (let i = 0; i < args.length; i++) {
        sumFor += args[i];
    }

    let sumForOf = 0;
    for (const num of args) {
        sumForOf += num;
    }

    let sumWhile = 0;
    let i = 0;
    while (i < args.length) {
        sumWhile += args[i];
        i++;
    }

    let sumDoWhile = 0;
    let j = 0;
    do {
        sumDoWhile += args[j];
        j++;
    } while (j < args.length);

    let sumReduce = args.reduce((acc, curr) => acc + curr, 0);

    console.log(`Sum with for: ${sumFor}`);
    console.log(`Sum with for..of: ${sumForOf}`);
    console.log(`Sum with while: ${sumWhile}`);
    console.log(`Sum with do..while: ${sumDoWhile}`);
    console.log(`Sum with reduce: ${sumReduce}`);
}

sum(1, 2, 3, 4, 5);

function findMaxIn2DArray(arr) {
    let max = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}

const arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(findMaxIn2DArray(arr2D));  // 9

function calculateLifespan(birthDeathData) {
    const lifespanData = {};

    for (const person in birthDeathData) {
        const { birth, death } = birthDeathData[person];
        lifespanData[person] = death - birth;
    }

    return lifespanData;
}

const birthDeathData = {
    'Albert Einstein': { birth: 1879, death: 1955 },
    'Isaac Newton': { birth: 1643, death: 1727 },
    'Marie Curie': { birth: 1867, death: 1934 }
};
console.log(calculateLifespan(birthDeathData));