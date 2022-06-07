import style from "../../styles/Buttons.module.scss";

export default function GreenButton(props: any) {
  return <a onClick= {props.onClick} className={style.greenButton}>{props.Title}</a>;
}
