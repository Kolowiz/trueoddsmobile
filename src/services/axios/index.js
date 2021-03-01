import axios from 'axios';
import snackbar from '../../lib/snackbar';

const apiClient = axios.create({
  // baseURL: `http://192.168.43.93:1337/`,
  baseURL: 'https://trueodds.herokuapp.com/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

apiClient.interceptors.request.use(async (request) => {
  console.log('Request', request);
  return request;
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    // Error handling
    const {response} = error;
    console.log('Error', error);
    if (!response) {
      return snackbar({
        message:
          'An error occured while sending your request. Please check your internet connection',
      });
      // return response;
    }
    const {message, errors} = response.data;

    // if (response.status === 422) {
    //   let fields = [];
    //   if (errors) {
    //     fields = Object.keys(errors).map((key) => {
    //       return {name: key, errors: [errors[key]]};
    //     });
    //   }
    //   response.errorFields = fields;

    //   snackbar({
    //     message,
    //   });
    //   return response;
    // }

    if (message) {
      return snackbar({
        message,
      });
    }
    return snackbar({
      message:
        'An error occured while sending your request. Please check your internet connection',
    });
  },
);

export default apiClient;
