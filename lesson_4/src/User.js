import { PureComponent } from "react";

class User extends PureComponent {
    render() {
        const {name, onChange, onDelete, index} = this.props;
        console.log(name)
        return (
            <div>
                <p>I'm {name}</p>
                <input value={name} onChange={(event) => onChange(event, index)} />
                <button onClick={() => onDelete(index)}>Delete</button>
            </div>
        )
    }
}

export default User;
