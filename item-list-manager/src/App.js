// Item List Manager React Application

import React, { useState } from 'react';

function ItemListManager() {
    const [items, setItems] = useState([]); // State for storing list items
    const [inputValue, setInputValue] = useState(""); // State for input field

    const handleAddItem = () => {
        if (inputValue.trim()) { // Add only non-empty items
            setItems([...items, inputValue.trim()]);
            setInputValue(""); // Clear input field
        }
    };

    return (
        <div style={{ 
            padding: "20px", 
            fontFamily: "Arial, sans-serif", 
            backgroundColor: "#0f0f0f", 
            color: "#dcdcdc", 
            minHeight: "100vh" 
        }}>
            <h1 style={{ color: "#f7df1e" }}>Item List Manager</h1>
            <input
                type="text"
                placeholder="Enter an item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ 
                    padding: "8px", 
                    marginRight: "10px", 
                    fontSize: "16px", 
                    backgroundColor: "#1e1e1e", 
                    color: "#dcdcdc", 
                    border: "1px solid #f7df1e", 
                    borderRadius: "4px" 
                }}
            />
            <button
                onClick={handleAddItem}
                style={{ 
                    padding: "8px 16px", 
                    fontSize: "16px", 
                    cursor: "pointer", 
                    backgroundColor: "#f7df1e", 
                    color: "#0f0f0f", 
                    border: "none", 
                    borderRadius: "4px", 
                    fontWeight: "bold" 
                }}
            >
                Add Item
            </button>
            <ul style={{ 
                marginTop: "20px", 
                fontSize: "18px", 
                backgroundColor: "#1e1e1e", 
                padding: "10px", 
                borderRadius: "4px" 
            }}>
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        style={{ 
                            padding: "5px 0", 
                            borderBottom: "1px solid #dcdcdc" 
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListManager;
