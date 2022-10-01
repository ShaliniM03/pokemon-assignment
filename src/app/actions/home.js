import { fetchCall } from '../utils/ajax';
import { API_METHODS } from '../constants/api-constants';

export const getData = (url, callback) => (
    fetchCall(url, API_METHODS.GET, '', callback)
);