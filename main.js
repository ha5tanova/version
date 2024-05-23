/* function compareVersion(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const num1 = v1[i];
        const num2 = v2[i];

        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }

    return 0;
}; */

//export default compareVersion;


console.log(compareVersion("0.1", "0.2")); // -1
console.log(compareVersion("0.2", "0.1")); // 1
console.log(compareVersion("4.2", "4.2")); // 0

