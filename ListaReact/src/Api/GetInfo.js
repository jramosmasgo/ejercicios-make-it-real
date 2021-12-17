const apiUrl = 'https://jsonplaceholder.typicode.com/'

export const getResultAPI = function (fragmentUrl) {
    const url = `${apiUrl}${fragmentUrl}`;

    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}


export const getAllPhotos = async function () {
    let result = await getResultAPI('photos');
    return result.filter(x => x.id < 100);
}
