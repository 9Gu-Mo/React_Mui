import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navGate = useNavigate();

  const goToMain = () => {
    navGate("/");
  };
  return (
    <>
      <div>로그인 페이지</div>
      <button type="button" onClick={goToMain}>
        메인
      </button>
    </>
  );
}
