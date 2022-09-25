import React from "react";

const List = ({ text, item, items, setItems }) => {
    const deleteHandler = () => {
        setItems(items.filter(el => el.id !== item.id));
    };
    return(
        <div className="items">
            <li className="item">{text}</li>
            <button onClick={deleteHandler} className="trash-btn">Obriši</button>
        </div>
    );
}

export default List;