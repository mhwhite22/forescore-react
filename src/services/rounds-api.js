const BASE_URL = '/api/rounds';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(round) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(round)
    }).then(res => res.json());
}