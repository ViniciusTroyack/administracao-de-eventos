import React from 'react'
import { createContext, useState } from 'react'

export const GraduationContext = createContext();

export default function GraduationProvider({ children }) {

    const [graduationDrinks, setgraduationsDrinks] = useState([]);

    const addGraduation = (item) => {
        setgraduationsDrinks([...graduationDrinks, item])
    }

    const removeGraduation = (item) => {
        const newList = graduationDrinks.filter((drinks) => drinks.id !== item.id);
        setgraduationsDrinks(newList)
    }

    return (
        <div>
            <GraduationContext.Provider value={{ graduationDrinks, addGraduation, removeGraduation }}>
                {children}
            </GraduationContext.Provider>
        </div>
    )
}