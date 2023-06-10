import React, { useState } from 'react';

const EditableSpan = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('Initial Value');

    const handleDoubleClick = () => {
        setIsEditing(true);
    /*    setInputValue(value)*/
    };

    const handleInputChange = (e:any) => {
        setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleSave = () => {
        setIsEditing(false);
        // Здесь можно добавить логику сохранения значения
        console.log('Saved:', inputValue);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <span onDoubleClick={handleDoubleClick}>{inputValue}</span>
            )}
        </div>
    );
};

export default EditableSpan;
