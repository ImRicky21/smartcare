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

async function getArticlesData() {
  const response = await fetch(`${API_ENDPOINT.article}`);
  const responseJson = await response.json();
  return responseJson;
}

async function getArticleData(id) {
  const response = await fetch(`${API_ENDPOINT.article}${id}`);
  const responseJson = await response.json();
  return responseJson;
}

async function getSurveyData({ id, age }) {
  const response = await fetch(`${API_ENDPOINT.development}${id}/${age}`);
  const responseJson = await response.json();
  return responseJson;
}

async function getGrowthFeedback({ measurement, status }) {
  const response = await fetch(`${API_ENDPOINT.growth}${measurement}/${status}`);
  const responseJson = await response.json();
  return responseJson;
}

async function setChildData({ id, data }) {
  const response = await fetch(`${API_ENDPOINT.addChild}${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  return response.json();
}

async function setChildDevelopmentData({ id, age, answer }) {
  const response = await fetch(`${API_ENDPOINT.development}${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ age, answer }),
  });

  return response.json();
}

async function putChildData({ id, data }) {
  const response = await fetch(`${API_ENDPOINT.child}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  return response.json();
}

async function deleteChildData({ userId, childId }) {
  const response = await fetch(`${API_ENDPOINT.deleteChild}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: userId, child: childId }),
  });

  return response.json();
}

export {
  register,
  login,
  getUserData,
  getChildData,
  setChildData,
  getGrowthFeedback,
  putChildData,
  getSurveyData,
  setChildDevelopmentData,
  deleteChildData,
  getArticlesData,
  getArticleData,
};
