
export const getRequest = function (url, params) {
    return fetch(import.meta.env.VITE_API_URL + url + "?" + new URLSearchParams(params), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'default',
        credentials: 'include'
    }).then(x => x.json())
};


export const postRequest = function (url, data) {
    return fetch(import.meta.env.VITE_API_URL + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'cors',
        cache: 'default',
        credentials: 'include'
    }).then(x => x.json())
}