function customSort(arr: (number | string)[]): (number | string)[] {
    const caracteresEspeciales: (string)[] = [];
    const invertidos: (number | string)[] = [];
    arr.forEach(item => {
        if (typeof item === 'string' && /[\$%&]/.test(item)) {
            caracteresEspeciales.push(item);
        } else {
            invertidos.unshift(item);
        }
    });
    const resultadoFinal: (number | string)[] = [];
    arr.forEach(item => {
        if (typeof item === 'string' && /[\$%&]/.test(item)) {
            resultadoFinal.push(caracteresEspeciales.shift()!);
        } else {
            resultadoFinal.push(invertidos.shift()!);
        }
    });
    return resultadoFinal;
}
const inputArray: (number | string)[] = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8];
const arrayRevertido = customSort(inputArray);
console.log(arrayRevertido);


export default customSort;