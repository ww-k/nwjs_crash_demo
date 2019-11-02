onmessage = function (evt) {
    console.log('receive message from main thread', evt);
    postMessage('worker started. start loop');
    var loop = true;
    var start = +new Date;
    var obj = {};
    while (loop) {
        var now = +new Date;
        var runtime = now - start;
        if (runtime > 10000) {
            loop = false;
        }
        var index = Math.floor(runtime / 1000);
        if (index > 0 && !obj[index]) {
            console.log('worker run ' + index + ' second');
            postMessage('worker run ' + index + ' second');
            obj[index] = true;
        }
    }
    console.log('worker loop done.');
    postMessage('worker loop done.');
}