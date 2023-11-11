import './UsernameForm.css'
import { useState, useRef } from 'react';


const UsernameForm = () => {
    const [controlledInputValue, setControlledInputValue] = useState('');

    const uncontrolledInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Controlled Input Value', controlledInputValue);
        console.log('Uncontrolled Input ', uncontrolledInputRef.current.value);  
    };
    
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                </label>
                    <input type='text' value={controlledInputValue} onChange={(e) => setControlledInputValue(e.target.value)} />
                <button type='submit'>Submit Controlled</button>
            </form>
            <form onSubmit={handleSubmit}>
                <label> Enter your name:
                </label>
                    <input type='text' ref={uncontrolledInputRef} />
                <button type='button' onClick={handleSubmit}>Submit Uncontrolled</button>
            </form>
        </div>
    )

}

export default UsernameForm;