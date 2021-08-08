import React from 'react'
import { createContext, useState } from 'react'

export const GetTogetherContext = createContext();

export default function GetTogetherProvider({ children }) {

    const [getTogetherDrinks, SetGetTogetherDrinks] = useState(
        JSON.parse(localStorage.getItem('gettogether')) || []
    );

    const addGetTogether = (item) => {
        SetGetTogetherDrinks([...getTogetherDrinks, item])
        localStorage.setItem("gettogether", JSON.stringify(getTogetherDrinks))
    }

    const removeGetTogether = (item) => {
        const newList = getTogetherDrinks.filter((drinks) => drinks.id !== item.id);
        SetGetTogetherDrinks(newList)
        localStorage.setItem("gettogether", JSON.stringify(getTogetherDrinks))
    }

    return (
        <div>
            <GetTogetherContext.Provider value={{ getTogetherDrinks, addGetTogether, removeGetTogether }}>
                {children}
            </GetTogetherContext.Provider>
        </div>
    )
};