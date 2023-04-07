import Router from "next/router";
import * as customerService from "../../service/customerService";

export default function LoginCard() {
  let inputEmail: string;
  let inputPassword: string;
  // Emailアドレスの入力値を変数に渡す
  const onChangeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    inputEmail = e.currentTarget.value;
  };
  // パスワードの入力値を変数に渡す
  const onChangePasswordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    inputPassword = e.currentTarget.value;
  };
  const onLoginClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // todo エラーハンドリングの実装
    const response = await customerService.signIn2(inputEmail, inputPassword);
    console.log(response);
    localStorage.setItem("accessToken", response);
    Router.push("/mainPage");
  };
  return (
    <div className="CardSize">
      <div className="Title">会員登録済みの方はこちら</div>

      <div className="EMailLabel">Email:</div>
      <div className="EMailInput">
        <input type="EMailInput" onChange={onChangeEmailHandler}></input>
      </div>

      <div className="PasswordLabel">パスワード:</div>
      <div className="PasswordInput">
        <input type="password" onChange={onChangePasswordHandler}></input>
      </div>
      <br />

      <button className="LoginButton" onClick={onLoginClick}>
        ログイン
      </button>
      <style jsx>{`
        .CardSize {
          /* RegisterCard */
          box-sizing: border-box;
          position: absolute;
          width: 392px;
          height: 224px;
          border: 1px solid #000000;
          background: #ffffff;
        }
        .Title {
          /* Title */
          position: absolute;
          width: 249px;
          height: 35px;
          left: 72px;
          top: 12px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #000000;
        }
        .EMailLabel {
          /* EMailLabel */
          position: absolute;
          width: 70px;
          height: 18px;
          left: 81px;
          top: 76px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 18px;
          color: #000000;
        }
        .EMailInput {
          position: absolute;
          width: 152px;
          height: 20px;
          left: 148px;
          top: 76px;
        }
        .PasswordLabel {
          /* PasswordLabel */
          position: absolute;
          width: 90px;
          height: 18px;
          left: 58px;
          top: 114px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 18px;
          color: #000000;
        }
        .PasswordInput {
          /* PasswordInput */
          box-sizing: border-box;
          position: absolute;
          width: 152px;
          height: 20px;
          left: 148px;
          top: 112px;
        }
        .LoginButton {
          position: absolute;
          width: 176px;
          height: 37px;
          left: 108px;
          top: 167px;
          color: white;
          background: rgba(0, 205, 218, 0.63);
          border-radius: 6px;
          border: none;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}
