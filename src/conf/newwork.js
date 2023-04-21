import axios from 'axios';
import {Config} from '../conf/config';
const Service = axios.create({
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	withCredentials: false,
});
Service.interceptors.request.use(
	config => {
		if (config.method === 'get') {
			config.params = {
				...config.data
			};
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);
Service.interceptors.response.use(
	response => {
		return Promise.resolve(response);
	},
	error => {
		return Promise.reject(error.response);
	},
);

const ajax = (url, data, method = 'post') => {
	return new Promise((resolve, reject) => {
		const option = {
			url: url,
			method: method,
			data,
		};

		Service(option).then(r => {
			resolve(r.data);
		}).catch(e => {
			reject(e);
		});
	});
};

export const post = (url, data) => {
	url = Config.apiBaseUrl + url;

	return ajax(url, data, 'post');
};

export const get = (url, data) => {
	url = Config.apiBaseUrl + url;

	return ajax(url, data, 'get');
};
