const apiUrl = 'http://localhost:3001/';

export function signUp(values) {
  return fetch(`${apiUrl}api/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      displayName: values.name,
      email: values.username,
      password: values.password,
    })
  }).then((res) => res.json());
}

export function signIn(values) {
  return fetch(`${apiUrl}api/signin`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: values.username,
      password: values.password,
    })
  }).then((res) => res.json());
}

export function tokenSignIn(token) {
  return fetch(`${apiUrl}api/signin`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.json());
}
