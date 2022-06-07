import { HTMLInputTypeAttribute } from "react";
import style from "../../styles/Inputs.module.scss";

interface Props {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

export default function GreenTextInput(props: Props) {
  return (
    <input
      id={props.id}
      className={style.greenTextInput}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
}
