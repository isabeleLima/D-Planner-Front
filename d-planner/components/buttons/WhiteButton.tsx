import style from "../../styles/Buttons.module.scss";

interface Props {
  Title: string;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export default function WhiteButton(props: Props) {
  return (
    <div className="mt-auto mb-5 d-flex justify-content-center">
      <button
        type={props.type}
        onClick={props.onClick}
        className={style.WhiteButton}
      >
        {props.Title}
      </button>
    </div>
  );
}
