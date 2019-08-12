export default class AbzService {

    apiBase = `https://frontend-test-assignment-api.abz.agency/api/v1/`;


    async _fetchData (url) {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch`)
        }
        const body = await res.json();
        return body
    }

    async getUsers (page, count) {
        const url = `${this.apiBase}users?page=${page}&count=${count}`;
        return this._fetchData (url);

    }

    async getPositions (positions) {
        const url = `${this.apiBase}${positions}`;
        return this._fetchData (url);
    }
    async getUser (userId) {
        const url = `${this.apiBase}users/${userId}`;
        return this._fetchData (url);
    }
    async getToken () {
        const url = `${this.apiBase}token`;
        return this._fetchData (url);
    }




}



