function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = random(0, characters.length - 1);
        key += characters[index];
    }
    return key;
}


function ipv4ToNumber(ip = '127.0.0.1') {
    return ip.split('.')
        .map(Number)
        .reduce((acc, byte, i) => acc + (byte << (8 * (3 - i))), 0);
}


function introspectObject(obj) {
    return Object.entries(obj)
        .filter(([key, value]) => typeof value === 'function')
        .map(([key, func]) => [key, func.length]);
}


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));          // "eg599gb60q926j8i"
console.log(ipv4ToNumber('192.168.1.10'));         // -1062731510
console.log(ipv4ToNumber());                       // 2130706433 (127.0.0.1)

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};
console.log(introspectObject(iface));              // [['m1', 1], ['m2', 2], ['m3', 3]]