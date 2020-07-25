import Vue from 'vue';

// url do backend (db.json)
export const apiBaseURL = 'http://localhost:5000';

export function onError(event) {
    if (event && event.response & event.response.data) {
        Vue.toasted.global.onError({ msg: event.response.data })
    } else if (typeof event === 'string') {
        Vue.toasted.global.onError({ msg: event });
    } else {
        Vue.toasted.global.onError();
    }
}

export default { apiBaseURL, onError }