const apiUrl = 'http://localhost:3001/';
// const apiUrl = 'https://enigmatic-waters-30776.herokuapp.com/';

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

export function getMatchesAPI() {
  return fetch(`${apiUrl}api/match`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }).then((res) => res.json());
}

export function getMatchAPI(id) {
  return fetch(`${apiUrl}api/match/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }).then((res) => res.json());
}

export function createPlayerAPI(values, token) {
  return fetch(`${apiUrl}api/player`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(values)
  }).then((res) => res.json());
}
