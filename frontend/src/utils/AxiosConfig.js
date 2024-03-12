import axios from "axios";

axios.defaults.withCredentials = true;

// eslint-disable-next-line no-undef
const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const app = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		"accept": "application/json",
		"Content-Type": "application/x-www-form-urlencoded",
	}
});

export const appJSON = axios.create({
	baseURL, 
	withCredentials: true,
	headers: {
		"accept": "application/json",
		"Content-Type": "application/json",
	}
});


app.interceptors.request.use((config) => {
	return config;
});

/* 
  The below is required if you want your API to return 
  server message errors. Otherwise, you'll just get 
  generic status errors.

  If you use the interceptor below, then make sure you 
  return an "err" (or whatever you decide to name it) message 
  from your express route: 
  
  res.status(404).json({ err: "You are not authorized to do that." })

*/
app.interceptors.response.use(
	response => {
		return response;
	}, 
	error => {
		const { response } = error;
		if (response.status === 401) {
			return app.post(
				// eslint-disable-next-line no-undef
				`${process.env.REACT_APP_AUTH}`, {
					grand_type: "refresh_token",
					withCredentials: true
				}
			).then(() => {
				return app(error.config);
			})
				.catch((error) => {
					return Promise.reject(error);
				});
		}
		return Promise.reject(error);
	}, 
);

export default app;