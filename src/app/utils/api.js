const apiUrl = 'http://localhost:3001/';

export function singUp(values) {
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

export function singIn(values) {
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
