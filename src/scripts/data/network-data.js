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

async function getUserData(id) {
  const response = await fetch(`${API_ENDPOINT.user}${id}`);
  const responseJson = await response.json();
  return responseJson;
}

async function getChildData(id) {
  const response = await fetch(`${API_ENDPOINT.child}${id}`);
  const responseJson = await response.json();
  return responseJson;
}

async function setChildData({ id, data }) {
  console.log(id);
  console.log(data);
  const response = await fetch(`${API_ENDPOINT.addChild}${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  return response.json();
}

export {
  register,
  login,
  getUserData,
  getChildData,
  setChildData,
};
