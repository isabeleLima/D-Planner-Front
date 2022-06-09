import style from "../../styles/Buttons.module.scss";

export default function RedButton(props: any) {
  return <a onClick= {props.onClick} className={style.redButton}>{props.Title}</a>;
}
