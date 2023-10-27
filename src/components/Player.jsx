import {useState} from "react";

export default function Player({name, symbol}) {

    const [ isEditing, setIsEditing ] = useState(false);

    function toggleEdit(){
        setIsEditing(isEditing => !isEditing);
    }

    let playerName = (
        <span className="player-name">{name}</span>
    );

    if(isEditing) {
        playerName = (
            <input type="text" required />
        );
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleEdit}>Edit</button>
        </li>
    );
}
