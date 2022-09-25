import React from "react";
import List from "./List";

const ItemsList = ({ items, setItems }) => {
    return (
        <div className="item-container">
            <ul className="item-list">
                {items.map((item) => (
                    <List 
                        setItems={setItems} 
                        items={items} 
                        key={item.id} 
                        item={item}
                        text={item.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemsList;