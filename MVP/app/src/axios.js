import Axios from 'axios';

const axios = Axios.create({
	baseURL: "https://docxtalks.com/api",
	withCredentials: true,
	headers: {
		"Content-Type": "multipart/form-data",
		"Accept": "application/json",
	},
});

export default axios;
