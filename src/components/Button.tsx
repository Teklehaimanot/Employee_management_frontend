interface Props {
    color: string,
    text: string
    onToggle: () => void
}

const Button: React.FC<Props> = ({ color, text, onToggle }) => {
    return (
        <button className="btn"
            style={{ background: color }}
            onClick={onToggle}
        >
            {text}</button>

    )
}

export default Button
