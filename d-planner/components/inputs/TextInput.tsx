import style from "../../styles/Inputs.module.scss";

export default function TextInput(props: any) {
  return (
    <input
      id={props.id}
      className={style.textInput}
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
}
