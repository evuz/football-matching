const token = 'token';

export function setToken(user) {
  if (typeof user === 'string') user = { token: user };
  if (user.token) {
    localStorage.setItem(token, user.token)
  }
}

export function getToken() {
  return localStorage.getItem(token);
}

export function removeToken() {
  return localStorage.removeItem(token);
}
