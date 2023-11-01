import { useState } from 'react';
import '../Style/Input.scss';

function Input(props: any) {
    
    const [message, setMessage] = useState(props.value);

    const handleChange = (event: { target: { value: any; }; }) => {
      setMessage(event.target.value);
    };

    return (
        <input 
            className={`Input ${props.classes}`}
            type={props.type}
            placeholder={props.placeholder}
            onChange={handleChange}
            value={message}
            disabled={props.disabled}
        />
    );
}

export default Input;