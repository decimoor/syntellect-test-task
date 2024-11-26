import "./ButtonStyles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}


export default function Button({ text, ...props }: ButtonProps) {
    return <button className="button" {...props}>{text}</button>;
}
