var num = 1;
var divisores = 0;

function primo() {

    divisores = 0;
    num++;

    for (var i = 1; i < num; i++) {
        if (num % i == 0)
            divisores++;
    }

    if (divisores == 1)
        postMessage(num);

    setTimeout("primo()", 100);
}

primo();
