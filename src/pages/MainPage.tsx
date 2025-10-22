import { Link, useNavigate } from "react-router-dom";
import MuiForm from "../component/mui/MuiForm";

export default function MainPage() {
  const navGate = useNavigate();

  const goToLogin = () => {
    navGate("/login");
  };

  return (
    <>
      <div>메인 페이지</div>
      <button type="button" onClick={goToLogin}>
        버튼 태그
      </button>
      <Link to="/login">Link 컴포넌트</Link>
      <MuiForm />
    </>
  );
}
