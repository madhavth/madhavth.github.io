function myFunctionTest(expected, found) {
    if (expected.toString() === found.toString()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    let max = a;
    const arr = [b, c];
    arr.forEach(e => {
        if (e > max) {
            max = e;
        }
    });

    return max;
}

function isVowel(string) {
    if (string.length !== 1) {
        return false;
    }

    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === string) {
            return true;
        }
    }

    return false;
}


function sum(arr) {
    let result = 0;
    arr.forEach(element => result += parseFloat(element));
    return result;
}

function multiply(arr) {
    let result = 1;
    arr.forEach(element => {
        result *= element;
    });
    return result;
}

function reverse(string) {
    let reverseStr = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reverseStr += string[i];
    }

    return reverseStr;
}

function findLongestWord(arr) {
    let longest = 0;

    arr.forEach(element => {
        if (element.length > longest) {
            longest = element.length;
        }
    });

    return longest;
}

function filterLongWords(arr, len) {
    return arr.filter(element => element.length > len);
}

let a = [1, 3, 5, 3, 3];

const multiplyEachElementBy10 = (a) => a.map(function (element, i, arr) {
    return element * 10;
});

const allElementsEqualTo3 = (a) => a.filter(function (element, i, arr) {
    return element === 3;
});

const productOfAllElements = (a) => a.reduce(function (prev, current) {
    return prev * current;
}, 1);

console.log(`Expected output of max(20,300) is 300. ${myFunctionTest(300, max(20, 300))}`);
console.log(`Expected output of maxOfThree(10,20,30) is 30. ${myFunctionTest(30, maxOfThree(10, 20, 30))}`);

console.log(`Expected output of isVowel('a') is true. ${myFunctionTest(true, isVowel("a"))}`);
console.log(`Expected output of isVowel('f') is false. ${myFunctionTest(false, isVowel("f"))}`);

console.log(`Expected output of sum(1,2,3,4,5) is 15. ${myFunctionTest(15, sum([1, 2, 3, 4, 5]))}`);
console.log(`Expected output of multiply(1,2,3,4,5) is 120. ${myFunctionTest(120, multiply([1, 2, 3, 4, 5]))}`);

console.log(`Expected output of reverse("test") is tset ${myFunctionTest("tset", reverse("test"))}`);

console.log(`Expected output of findLongestWord(["test","abc","a"]) is 4. ${myFunctionTest(4, findLongestWord(["test", "abc", "a"]))}`);
console.log(`Expected output of filterLongWords(["abce","abcd","ab"],3) is ["abce","abcd"] ${myFunctionTest(["abce", "abcd"], filterLongWords(["abce", "abcd", "ab"], 3))}`)


// qsn 8
console.log(`Expected output of multiplyEachElementBy10([${a}]) is [10,30,50,30,30]. ${myFunctionTest([10,30,50,30,30], multiplyEachElementBy10(a))}`);
console.log(`Expected output of allElementsEqualTo3([${a}]) is [3,3,3]. ${myFunctionTest([3,3,3], allElementsEqualTo3(a))}`);
console.log(`Expected output of productOfAllElements([${a}]) is 135. ${myFunctionTest(135, productOfAllElements(a))}`);
