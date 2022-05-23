import style from "../../styles/Buttons.module.scss";

export default function PurpleButton(props: any) {
  return <a className={style.purpleButton}>{props.Title}</a>;
}
