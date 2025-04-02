function maxCommon(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function fractionsEqual(numerator1, denominator1, numerator2, denominator2) {
    if (denominator1 === 0 || denominator2 === 0) {
        return alert("Mẫu số không thể bằng 0!");
    }

    let maxCommon1 = maxCommon(numerator1, denominator1);
    numerator1 /= maxCommon1;
    denominator1 /= maxCommon1;

    let maxCommon2 = maxCommon(numerator2, denominator2);
    numerator2 /= maxCommon2;
    denominator2 /= maxCommon2;

    if ( numerator1 === numerator2 && denominator1 === denominator2 ) {
        return `Hai phân số bằng nhau!`;
    } else {
        return `Hai phân số không bằng nhau!`;
    }
}

let result = fractionsEqual(1, 2, 100, 200); 
console.log(result); 

result = fractionsEqual(1, 2, 2, 3); 
console.log(result); 