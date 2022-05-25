import style from "../../styles/Buttons.module.scss";

export default function BlueButton(props: any) {
  return <a onClick= {props.onClick} className={style.blueButton}>{props.Title}</a>;
}
