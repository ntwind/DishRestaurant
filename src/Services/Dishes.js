
export function getDishes(page, qtu) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( new Array(9).fill(
                    {
                        title: 'Roasted Butternut Pumkin, Shiitake NMushroom and Haluomi Salad',
                        descr: 'A hearty mix of fresh greensm, roasted vegetables and golden haluomi makes up this tasty winter salad.',
                        ingredients: 'meat',
                        cals: 243,
                        price: 66,
                        serves: 2
                    }
                )
            );
        }, 3000);
    })
}