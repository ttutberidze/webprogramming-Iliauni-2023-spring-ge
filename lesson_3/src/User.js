const user = ({name, onChange}) => {
    return (
        <div>
            <p>I'm {name}</p>
            <input value={name} onChange={onChange} />
        </div>
    )
}

export const user2 = () => {
    return (
        <div>I'm a user2</div>
    )
}

export default user;
