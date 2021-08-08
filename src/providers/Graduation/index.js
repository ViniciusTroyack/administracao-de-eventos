import React from 'react'
import { createContext, useState } from 'react'

export const GraduationContext = createContext();

export default function GraduationProvider({ children }) {

    const [graduationDrinks, setgraduationsDrinks] = useState(
        JSON.parse(localStorage.getItem('gettogether')) || []
    );

    const addGraduation = (item) => {
        setgraduationsDrinks([...graduationDrinks, item])
        localStorage.setItem("graduation", JSON.stringify(graduationDrinks))
    }

    const removeGraduation = (item) => {
        const newList = graduationDrinks.filter((drinks) => drinks.id !== item.id);
        setgraduationsDrinks(newList)
        localStorage.setItem("graduation", JSON.stringify(graduationDrinks))
    }

    return (
        <div>
            <GraduationContext.Provider value={{ graduationDrinks, addGraduation, removeGraduation }}>
                {children}
            </GraduationContext.Provider>
        </div>
    )
}