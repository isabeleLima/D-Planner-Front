import style from "../../styles/Buttons.module.scss";

export default function GreenButton(props: any) {
  return <a className={style.greenButton}>{props.Title}</a>;
}