export const apiDomain = 'http://localhost:8084/webapi/'
export const loginUrl = apiDomain + 'myresource/login'
export const userUrl = apiDomain + 'api/user'
export const hijosListUrl = apiDomain + 'api/hijos'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
