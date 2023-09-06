import "./styles.scss";

interface InputProps {
  text?: string;
}

export function Input({ text }: InputProps) {
  return (
    <div className="container-input">
      <input placeholder={text} />
    </div>
  );
}
