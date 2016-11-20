import Axios from 'axios';
import config from '../config';

Axios.interceptors.request.use((conf) => {
	console.log('request interceptor ', conf)
	const updatedConfig = Object.assign({}, conf);
	const token = localStorage.getItem('auth-token');
	if (token) {
		updatedConfig.headers.Authorization = `Bearer ${token}`;
	}
	return updatedConfig;
});


const Api = {
	// auth
	login: (credentials) => Axios.post(`${config.API_URL}/auth/login`, {
		username: credentials.username,
		password: credentials.password
	}),
	resetPassword: (username) => Axios.post(`${config.API_URL}/public/user/reset-password`, { username }),
	changePassword: (oldPassword, newPassword) => Axios.post(`${config.API_URL}/secure/user/change-password`, {
		oldPassword,
		newPassword
	}),

	//other stuff
};

export default Api;
