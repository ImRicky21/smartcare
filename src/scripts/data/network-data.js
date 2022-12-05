import API_ENDPOINT from '../config/api-endpoint';

async function login({ email, password }) {
  const response = await fetch(`${API_ENDPOINT.signIn}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

async function register({ username, email, password }) {
  const response = await fetch(`${API_ENDPOINT.signUp}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  return response.json();
}

export {
  register,
  login,
};
