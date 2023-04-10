import { Link } from "react-router-dom";
import Loginbg from "./../imgs/login/login_bg.jpg";

function Login({ Logo }) {
  return (
    <div className="login-wrap">
      <div className="login-background-wrap">
        <img src={Loginbg} alt="login-background"></img>
      </div>

      <div className="login-header">
        <Link to="/main">
          <img className="logo" src={Logo} alt="logo"></img>
        </Link>
      </div>

      <div className="login-box">
        <h2>로그인</h2>
        <form>
          <input type="text" placeholder="아이디를 입력하세요"></input>
          <input type="password" placeholder="비밀번호를 입력하세요"></input>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
