import "./button.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Button({ buttonName }) {
  return (
    <>
      <button
        className="main-button"
        onClick={(eve) => {
          eve.preventDefault();
        }}
      >
        {buttonName}
        <ArrowCircleRightIcon className="icon" />
      </button>
    </>
  );
}
