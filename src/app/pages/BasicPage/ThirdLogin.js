import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@themesberg/react-bootstrap";
import { loginByFacebook, loginByGoogle } from "app/core/apis/user";
import configuration from "app/configuration";
import { useDispatch } from "react-redux";
import { updateUser } from "app/store/userReducer";
import {
  useLocation,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import "./ThirdLogin.css";

const clientId =
  "588336887447-h306o0g8rsfr9o2421d749sgk6hu916k.apps.googleusercontent.com";
const appId = "840430540176218";

const ThirdLogin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const responseFacebook = async (response) => {
    try {
      const result = await loginByFacebook({
        ...response,
        picture: response?.picture?.data?.url,
      });
      if (result.status === 200) {
        //set token
        configuration.setApiRequestToken(result.data.tokens);
        dispatch(updateUser(result.data));
        if (location?.state !== undefined) {
          history.push(`${location.state.from}${location.state.search}`);
        } else {
          history.push("/");
        }
      }
    } catch (error) {}
  };

  const onSuccess = async (response) => {
    try {
      const result = await loginByGoogle(response);
      if (result.status === 200) {
        //set token
        configuration.setApiRequestToken(result.data.tokens);
        dispatch(updateUser(result.data));
        if (location?.state !== undefined) {
          history.push(`${location.state.from}${location.state.search}`);
        } else {
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFailure = (response) => console.log(response);

  return (
    <>
      <div className="mt-3 mb-4 text-center">
        <span className="fw-normal">or login with</span>
      </div>
      <div className="my-4">
        <FacebookLogin
          id="buttonFB"
          appId={appId}
          fields="name,email,picture"
          callback={responseFacebook}
          icon={<FontAwesomeIcon icon={faFacebook} />}
          textButton={"Continue with Facebook"}
          className="btn-login-fb"
        />
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <Button className="socialBtn" block onClick={renderProps.onClick}>
              {<FontAwesomeIcon icon={faGoogle} />}
              Continue with Google
            </Button>
          )}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
        />
      </div>
    </>
  );
};

export default ThirdLogin;
