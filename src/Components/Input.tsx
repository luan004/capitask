import '../Style/Input.scss';

function Input(props: any) {
    return (
        <input 
            className={`Input ${props.classes}`}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            disabled={props.disabled}
        />
    );
}

export default Input;