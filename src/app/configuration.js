const configuration = {
  ApiUrl: "http://localhost:5000",
  setApiRequestToken: (token) => {
    localStorage.setItem('requestToken', JSON.stringify(token))
  },
  removeApiRequestToken: () => {
    localStorage.removeItem('requestToken')
  },
  getAPIRequestToken: () => {
    return JSON.parse(localStorage.getItem('requestToken'))
  }
};

export const serverURL = 'http://localhost:3000'

export default configuration;
