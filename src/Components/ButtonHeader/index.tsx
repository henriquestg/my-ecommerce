import { User } from "../Icon/User";
import "./styles.scss";

interface TextProps {
  text: string;
  icon?: any;
}

export function ButtonHeader({ text, icon }: TextProps) {
  return (
    <div className="login">
      <button>
        {icon}
        {text}
      </button>
    </div>
  );
}
