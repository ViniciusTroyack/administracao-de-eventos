import axios from 'axios';
import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
    const [menu, setMenu] = useState([]);

    const getDrinks = () => {
        axios
            .get('https://api.punkapi.com/v2/beers')
            .then((res) => setMenu(res.data),
                console.log('ok'))
            .catch((e) => console.log(e));
    }
    useEffect(() => {
        getDrinks();
    }, []);

    return (
        <div>
            <MenuContext.Provider value={{ menu }}>
                {children}
            </MenuContext.Provider>
        </div>
    )
}
