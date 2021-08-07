import React from 'react'
import { createContext, useState } from 'react'

export const MarriageContext = createContext();

export default function MarriageProvider({ children }) {

    const [marriageDrinks, setMarriageDrinks] = useState([]);

    const addMarriage = (item) => {
        setMarriageDrinks([...marriageDrinks, item])
    }

    const removeMarriege = (item) => {
        const newList = marriageDrinks.filter((drinks) => drinks.id !== item.id);
        setMarriageDrinks(newList)
    }

    return (
        <div>
            <MarriageContext.Provider value={{ marriageDrinks, addMarriage, removeMarriege }}>
                {children}
            </MarriageContext.Provider>
        </div>
    )
}