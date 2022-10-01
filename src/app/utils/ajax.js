import axios from 'axios';
import { API_METHODS } from '../constants/api-constants';

export const fetchCall = (url, method, payload, callback, ...args) =>
  new Promise((resolve, reject) => {
    let options = {};

    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": '*',
    };

    if (method === API_METHODS.GET) {
      options = {
        method,
        headers,
        url,
      };
    } else {
      options = {
        method,
        data: JSON.stringify(payload),
        headers,
        url,
      };
    }

    axios(options)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 400) {
          callback(error.response.data);
          return;
        }
        callback(error);
      });
  });

