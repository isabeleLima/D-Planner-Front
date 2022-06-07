import style from "../../styles/Buttons.module.scss";

export default function OrangeButton(props: any) {
  return <a onClick= {props.onClick} className={style.orangeButton}>{props.Title}</a>;
}
