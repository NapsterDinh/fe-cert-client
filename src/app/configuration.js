const configuration = {
  ApiUrl: "http://ec2-18-118-107-150.us-east-2.compute.amazonaws.com:5000",
  //ApiUrl: "http://localhost:5000",
  setApiRequestToken: (token) => {
    localStorage.setItem("requestToken", JSON.stringify(token));
  },
  removeApiRequestToken: () => {
    localStorage.removeItem("requestToken");
  },
  getAPIRequestToken: () => {
    return JSON.parse(localStorage.getItem("requestToken"));
  },
};

export const serverURL = "http://localhost:3000";

export default configuration;

const userNameTestPaypay = "sb-m57ir8943048@personal.example.com";
const password = "thanhnhan";
