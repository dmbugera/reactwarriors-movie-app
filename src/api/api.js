import queryString from "query-string";

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

export default class CallAPI {
    // options = {
    //     params: 2
    // }
    static get (url, options = {}) { //??? static
        const { params = {} } = options;
        const queryStringParams = {
            api_key: API_KEY_3,
            ...params // ??
            // language: 'ru-RU',
            // sort_by: sort_by,
            // page: page,
            // primary_release_year: primary_release_year,
            // with_genres: with_genres.join(",")
            // [] => "" , [1] => 1, [1, 2] => 1,2  ??

        };

        // url = '/discover/movie'
        // params = {}
        return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
            {
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        })
    }
    static post(url, options = {}){
        const {params = {}, body ={}} = options;
        const queryStringParams = {
            api_key: API_KEY_3,
            ...params
        };
        return fetchApi(`${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            })
    }
    // static delete(url, options = {}){
    //     const {params = {}, body ={}} = options;
    //     const queryStringParams = {
    //     api_key: API_KEY_3,
    // ...params
    // };
    //     return fetchApi(`${API_URL}/authentication/session?${queryString.stringify(queryStringParams}`, {
    //         method: 'DELETE',
    //         mode: 'cors',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     })
    // }
}