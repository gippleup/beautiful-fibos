function openTab(tabName) {
    var i;
    var x = document.querySelectorAll('.tabs');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";  
}


function memoFibo () {
    let cache  = {};
    function fiboOrigin (k) {
        let argsString = String(k);
        if (argsString in cache) {
            return cache[argsString];
        } else {
            let result = k < 3 ? 1: fiboOrigin(k-1) + fiboOrigin(k-2);
            cache[argsString] = result;
            return result;
        }
    }
    return (n) => {
        let argsString = String(n);
        if (argsString in cache) {
            return cache(argsString);
        } else {
            let result = fiboOrigin(n);
            cache[argsString] = result;
            return [result, cache];
        }
    }
}

let fibonacci = memoFibo();
let myFibo = fibonacci(1476);
let myFiboArr = Object.values(myFibo[1]);


function showLinearFibo (fiboArr) {
    let target = document.querySelector('#fibo-linear > .fibo-container');
    let newEle = document.createElement('DIV');
    newEle.className = 'fibo-content';
    target.appendChild(newEle);
    let newPosEle = target.querySelector('.fibo-content');
    for (let i=0; i<fiboArr.length; i++) {
        newPosEle.innerHTML += fiboArr[i].noExponents() + "<br>";
    }
}


showLinearFibo(myFiboArr);

