import axios from 'axios'

const apiBaseUrl = 'http://localhost:3000/'

/**
 * Makes an async axios request with the given parameters. For further information, please refer to https://www.npmjs.com/package/axios in the Request Config section.
 * @param {Boolean} useAuth The flag which tells if the request should contain an Authorization header or not. If true, the stored user's JWT will be used as Bearer token. Default true.
 * @param {String} url The URL to call. You only have to write the route that comes after API base URL. (i.e: "users/123") Default "".
 * @param {String} method The HTTP request method. Basically one of "get", "post", "patch", "put", "delete". Default "get".
 * @param {Object} headers The headers object of the request. Default {}.
 * @param {Object} params The params object of the request. It is recommended to configure parameters here instead of editing the URL string. Default {}.
 * @param {Object} data The data object of the request. Default {}.
 * @param {Number} timeout The maximum allowed time before getting a response from the API. Default 0 (no timeout).
 * @returns An axios Promise object to use with .then().catch() or async/await.
 */
export const request = async (
  url = '',
  method = 'get',
  headers = {},
  params = {},
  data = {},
  timeout = 0,
  withCredentials = true
) =>
  axios({
    url,
    method,
    baseURL: apiBaseUrl,
    headers: headers,
    params,
    data,
    timeout,
    withCredentials,
  })

export const getImage = (url) => axios.get(url)
