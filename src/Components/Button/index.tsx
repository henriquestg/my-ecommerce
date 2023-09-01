import "./styles.scss";

interface ButtonProps {
  text: string;
  isBlack?: boolean;
}

export function Button({ text, isBlack }: ButtonProps) {
  let styles = "btn-showcase";

  if (isBlack) {
    styles = styles + " bg-black";
  }

  return <button className={styles}>{text}</button>;
}
