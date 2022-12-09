import CONFIG from './global-config';

const API_ENDPOINT = {
  signUp: `${CONFIG.BASE_URL}api/sign-up/`,
  signIn: `${CONFIG.BASE_URL}api/sign-in/`,
  user: `${CONFIG.BASE_URL}api/user/`,
  child: `${CONFIG.BASE_URL}api/child/`,
  addChild: `${CONFIG.BASE_URL}api/user/add-child/`,
  growth: `${CONFIG.BASE_URL}api/growth/`,
  development: `${CONFIG.BASE_URL}api/development/`,
};

export default API_ENDPOINT;
