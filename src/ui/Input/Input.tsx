import "./InputStyles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export default function Input({ label, className, ...props }: InputProps) {

    return (
        <div className="inputWrapper">
            <label className="label">{label}</label>
            <input className={`input ${className}`} {...props} />
        </div>
    )
}
