function same (arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {

        // console.log(val); //1 2 3 2
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        // console.log(key); // 1, 2, 3
        console.log(frequencyCounter1[key]); //1 2 1
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // frequencyCounter key에 대응하는 value값이 같지 않은 경우
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

same([1, 2, 3, 2], [9, 4, 1, 4]);