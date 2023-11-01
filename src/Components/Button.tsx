import '../Style/Button.css';

function Button(props: any) {
    return (
        <button 
            className={`Button ${props.classes}`}
            onClick={props.onClick}
            >
            {props.text}
        </button>
    );
}

export default Button;