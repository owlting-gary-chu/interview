const defaultOptions = {
  method: 'get',
  mode: 'cors',
  credentials: 'include'
}

export default (url, options = {}) => {
  return fetch(url, Object.assign(defaultOptions, options))
}
