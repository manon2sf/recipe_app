/**
 * fetch.js - fetch lib file
 */

/* Config import */
import * as config from "../../config.json";

/* Fetch from api method */
const fetchFromApi = (verb, path, data) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  });

  const options = {
    headers: headers,
    method: verb,
    credentials: "include",
    mode: "cors",
  };

  if (verb !== "GET") {
    options.body = JSON.stringify(data);
  }

  return fetch(config.apiUrl + path, options).then((response) => {
    if (
      response.status === 200 ||
      response.status === 301 ||
      response.status === 302
    ) {
      return response.json();
    } else if (response.status === 401) {
      return new Promise((resolve, reject) => {
        reject({ error: true, logout: true });
      });
    } else {
      return new Promise((resolve, reject) => {
        reject({ error: true });
      });
    }
  });
};

export default fetchFromApi;
