import React from 'react'
import { createContext, useState } from 'react'

export const MarriageContext = createContext();

export default function MarriageProvider({ children }) {

    const [marriageDrinks, setMarriageDrinks] = useState(
        JSON.parse(localStorage.getItem('marriage')) || []
    );

    const addMarriage = (item) => {
        setMarriageDrinks([...marriageDrinks, item])
        localStorage.setItem("marriage", JSON.stringify(marriageDrinks))
    }

    const removeMarriege = (item) => {
        const newList = marriageDrinks.filter((drinks) => drinks.id !== item.id);
        setMarriageDrinks(newList)
        localStorage.setItem("marriage", JSON.stringify(marriageDrinks))
    }

    return (
        <div>
            <MarriageContext.Provider value={{ marriageDrinks, addMarriage, removeMarriege }}>
                {children}
            </MarriageContext.Provider>
        </div>
    )
};