import { useNavigate } from "react-router-dom";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Header(props: Props) {
  const navGate = useNavigate();

  const goToIntro = () => {
    navGate("/intro");
  };

  return (
    <>
      <header>
        <button type="button" onClick={goToIntro}>
          인트로 페이지
        </button>
        <button type="button" onClick={props.onClick}>
          다크모드
        </button>
      </header>
    </>
  );
}
