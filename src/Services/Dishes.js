
export function getDishes(page, qtu) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve({a: 1})
        }, 3000);
    })
}