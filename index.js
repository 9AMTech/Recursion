let array = [];

let fibs = (len, curr, prev, array) => {
    if (array.length > len) {
        console.log(array);
        return;
    }
    else {
        if (curr === 0) {
            array.push(curr);
            curr++;
            array.push(curr);
            array.push(curr);
            return fibs(len, curr, curr, array);
        }
        else {
            let prevNum = curr;
            let newNum = curr + prev;
            array.push(newNum);
            return fibs(len, newNum, prevNum, array);
        }
    }
}

// fibs(8, 0, null, array);

// Merge sort needs two functions, one to merge arrays, and another to sort them
// The merge one needs to take two arrays and merge them into one singular array
// The merge sort one will divide the arrays into their smallest even count
// Then merge up from there.

let array2 = [5, 3, 10, 2, 1, 15, 6];
const merge = (l, r) => {
    if (l[0] < r[0]) {
            l.shift();
            r.shift();
    }
    else {
        r.shift();
        l.shift();
    }
}

const mergeSort = (array) => {
    let mid = array.length / 2;
    let l = array.slice(0, mid);
    let r = array.slice(mid, array.length);
    console.log(`${l} is left and ${r} is right`);
    while (l.length && r.length >= 2) {
        mergeSort(l);
        mergeSort(r);
    }
    return merge(l, r);
}

const mergedAndSorted = []
mergedAndSorted.push(mergeSort(array2));
console.log(array2);
console.log(mergedAndSorted);


