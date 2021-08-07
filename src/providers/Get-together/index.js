import React from 'react'
import { createContext, useState } from 'react'

export const GetTogetherContext = createContext();

export default function GetTogetherProvider({ children }) {

    const [getTogetherDrinks, SetGetTogetherDrinks] = useState([]);

    const addGetTogether = (item) => {
        SetGetTogetherDrinks([...getTogetherDrinks, item])
    }

    const removeGetTogether = (item) => {
        const newList = getTogetherDrinks.filter((drinks) => drinks.id !== item.id);
        SetGetTogetherDrinks(newList)
    }

    return (
        <div>
            <GetTogetherContext.Provider value={{ getTogetherDrinks, addGetTogether, removeGetTogether }}>
                {children}
            </GetTogetherContext.Provider>
        </div>
    )
};