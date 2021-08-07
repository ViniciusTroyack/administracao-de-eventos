import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../providers/Menu'
import Card from '../../components/Card'

export default function Menu() {
    const { menu } = useContext(MenuContext)

    return (
        <div>
            Menu
            <ul>
                {menu.map((drink) => <Card key={drink.id} drink={drink} />)}
            </ul>
        </div>
    )
}
