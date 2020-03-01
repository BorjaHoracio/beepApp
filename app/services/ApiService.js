import axios from 'axios';
const apiAxios = axios.create();
apiAxios.defaults.headers.common['Content-Type'] = 'application/json';
apiAxios.interceptors.request.use(request => {
    request.baseURL = 'https://beeps-api.herokuapp.com/';
    return request;
});

export default {
    async getBeeps ({offset = 0, limit = 10}) {
        const method = 'GET';
        let params = this.makeQueryParams({
            limit: `${limit}`,
            from: `${offset}`,
		})
        const url = `/beep?${params}`;
        return await this.makeRequest({method, url});
    },
    async postBeep ({username='', userId=''}) {
        const method = 'POST';
        const url = '/beep';
        const data = {
            username,
            userId
        };
        return this.makeRequest({method, url, data});
    },
    makeQueryParams (params) {
		let queries = '';
		for(var key in params){
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},
    async makeRequest (requestData = {}){
        try {
			let res = await apiAxios(requestData);
			return res.data;
		} catch (error) {
            throw error;
        }
    }

}