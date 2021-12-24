const urlApi = 'https://fakestoreapi.com/';

export const getAllProducts = function () {
    const url = `${urlApi}products`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    })
};

export const getProduct = function (idProduct) {
    const url = `${urlApi}products/${idProduct}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    })
}



