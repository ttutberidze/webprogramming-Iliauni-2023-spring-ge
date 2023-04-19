import {memo} from 'react';

const User = ({name, onChange, onDelete, index}) => {
    console.log(name);
    return  (
        <div>
            <p>{name}</p>
            <p>
                <input value={name} onChange={(event) => onChange(event.target.value, index)} />
                <button onClick={() => onDelete(index)}>Delete</button>
            </p>
        </div>
    )
}

export default memo(User);