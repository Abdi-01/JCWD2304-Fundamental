// ADVANCE TOPIC : SYNCHRONOUS vs ASYNCHRONOUS

// SYNCHRONOUS
// console.log('Program 1');
// console.log('Program 2');
// console.log('Program 3');

// ASYNCHRONOUS
console.log('Program 1');
setTimeout(() => console.log('Program 2'));
console.log('Program 3');

// CALLBACK
function readFile(path, cbfn) {
    let location = path;
    return cbfn(location);
};

// NESTED CALLBACK
const download = (url, cbfn) => {
    console.log(`Download from ${url} process...`);
    let count = 0;
    for (let size = 0; size < 1000; size++) {
        count++;
    }

    if (count == 1000) {
        cbfn(url, error = 'Error Download');
    }
}

const notify = (url) => {
    console.log(`Download from ${url} ✅`);
}

let url1 = 'https:gdrive.com';
let url2 = 'https:spotify.com';
let url3 = 'https:youtube.com';
// Single Callback
download(url1, notify);

// NESTED CALLBACK
download(url1, (url) => {
    console.log(`${url}`);
    download(url2, (url) => {
        console.log(`${url}`);
        download(url3, (url) => {
            console.log(`${url}`);
            console.log('All download complete');
        })
    })
});

// PROMISE
const downloadPromise = new Promise((resolve, reject) => {
    let progress = 0;
    while (progress < 100) {
        progress++;
    }
    progress -= Math.round(Math.random());
    if (progress == 100) {
        resolve(`Download Complete ✅`);
    } else {
        reject(`Download Failed ❌`);
    }
});

downloadPromise.then((res) => {
    console.log(res);
    downloadPromise.then((res) => {
        console.log(res);
        downloadPromise.then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});

// Promise.all() : mengeksekusi fungsi async berstruktur promise sekaligus
const dwnldFirst = new Promise((resolve, reject) => {
    let progress = 0;
    while (progress < 25) {
        progress++;
    }
    if (progress == 25) {
        resolve(`Download progress ${progress}%`);
    } else {
        reject(`Download Failed ❌`);
    }
});

const dwnldHalf = new Promise((resolve, reject) => {
    let progress = 0;
    while (progress < 50) {
        progress++;
    }
    if (progress == 50) {
        resolve(`Download progress ${progress}%`);
    } else {
        reject(`Download Failed ❌`);
    }
});

const dwnldEnd = new Promise((resolve, reject) => {
    let progress = 0;
    while (progress < 100) {
        progress++;
    }
    progress -= Math.round(Math.random())
    if (progress == 100) {
        resolve(`Download progress ${progress}% ✅`);
    } else {
        reject(`Download Failed ❌`);
    }
});
Promise.all([dwnldFirst, dwnldHalf, dwnldEnd]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// ASYNC / AWAIT

let executeDownload = async () => {
    try {
        let result = await dwnldFirst;
        console.log(result);
        let resultHalf = await dwnldHalf;
        console.log(resultHalf);
        let resultEnd = await dwnldEnd;
        console.log(resultEnd);
    } catch (error) {
        console.log(error);
    }
};

executeDownload()