const token = 'token';

export function setToken(user) {
  if (typeof user === 'string') user = { token: user };
  if (user.token) {
    localStorage.setItem(token, user.token)
  }
}
