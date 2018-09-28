export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "520490b0955440b671992c969bf394e5";

export const API_KEY_4 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjA0OTBiMDk1NTQ0MGI2NzE5OTJjOTY5YmYzOTRlNSIsInN1YiI6IjViOTgzZmI2MGUwYTI2Mjg0ODAwN2E4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OaGREsf8Ea9b5QDkobYCIUr0PV9gsPpcVWzRUa2h93w";


export const fetchApi = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (response.status < 400) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(response => {
                response.json().then(error => {
                    reject(error);
                });
            });
    });
};