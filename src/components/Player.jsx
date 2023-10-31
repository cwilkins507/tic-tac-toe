import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function toggleEdit(){
        setIsEditing(isEditing => !isEditing);

        if (isEditing){
            onChangeName(symbol, playerName);
        }
    }

    // example two-way binding event handler uses the built in onChange method which passes an event, need to
    // use target to reference the event object and value for specific property
    function changeName(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = (
        <span className="player-name">{playerName}</span>
    );

    if(isEditing) {
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={changeName}/>
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
