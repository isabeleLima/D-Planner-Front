import style from "../../styles/Buttons.module.scss";

export default function WhiteButton(props: any) {
  return (
    <div className="mt-auto mb-5 d-flex justify-content-center">
      {" "}
      <a className={style.WhiteButton}>{props.Title}</a>
    </div>
  );
}
