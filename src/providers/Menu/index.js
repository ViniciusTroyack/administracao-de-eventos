import axios from 'axios';
import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
    const [menu, setMenu] = useState([]);

    const getDrinks = () => {
        axios
            .get('https://api.punkapi.com/v2/beers')
            .then((res) => setMenu(res.data))
            .catch((e) => console.log(e));
    }
    useEffect(() => {
        getDrinks();
    }, []);

    const addMenu = (item) => {
        setMenu([...menu, item])
        localStorage.setItem("menu", JSON.stringify(menu))
    }

    const removeMenu = (item) => {
        const newList = menu.filter((drinks) => drinks.id !== item.id);
        setMenu(newList)
        localStorage.setItem("menu", JSON.stringify(menu))
    }

    return (
        <div>
            <MenuContext.Provider value={{ menu, addMenu, removeMenu }}>
                {children}
            </MenuContext.Provider>
        </div>
    )
}
