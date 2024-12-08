export const timerFunction = (callback, delay) => {
    setTimeout(() => {
        callback('done');
    }, delay);
};

export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data received');
        }, 1000);
    });
};