import { useState } from 'react';

import "./index.css";

export default function Component({ onSubmit, placeholder, button }) {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = () => {
        if (value.length === 0) return null;
        if(onSubmit) {
            onSubmit(value);
        } else {
            throw new Error("onSubmit props is undefined");
        }
    
        setValue("");
    };

    const isDisabled = value.length === 0;

    return (
        <div className="field-form">
            <textarea
                className="field-form__field"
                placeholder={placeholder}
                value={value}
                rows={2}
                onChange={handleChange}

            />
            <button
                className="field-form__button"
                disabled={isDisabled}
                onClick={handleSubmit}
            >
                {button}
            </button>
        </div>
    );
}