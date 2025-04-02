function prime() {
    let n = parseInt(prompt("Nhập 1 số nguyên dương nhỏ hơn 50: "));
    if (n > 50 || n <= 0 || isNaN(n)) {
        alert("Hãy nhập n là 1 số nguyên dương nhỏ hơn 50!");
        return;
    }

    let a = prompt(`Nhập ${n} phần tử là số nguyên cách nhau bởi dấu cách`).split(" ").map(Number);

    if (a.length !== n) {
        alert(`Mảng không có đúng ${n} phần tử!`);
        return;
    } else {
        for (let i = 0; i < n; i++) {
            if (isNaN(a[i])) {
                alert('Hãy nhập các phần tử là số nguyên!');
                return;
            }
        }
    }
    console.log(a);
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (checkPrime(a[i])) {
            b.push(a[i]);
        }
    }

    if (b.length > 0) {
        console.log(b);
    } else {
        alert("Không có số nguyên tố trong mảng!");
    }
}

function checkPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
prime();