const BASE_URL = '/api/courses';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(course) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(course)
    }).then(res => res.json());
}
