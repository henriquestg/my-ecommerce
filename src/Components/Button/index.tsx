import "./styles.scss";

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <button className="btn-showcase">{text}</button>;
}
