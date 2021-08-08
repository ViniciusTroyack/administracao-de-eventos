import React from 'react'
import { useContext, useState } from 'react'
import { MenuContext } from '../../providers/Menu'
import Card from '../../components/Card'
import { MainContainer } from './styles'

export default function Menu() {
    const [local] = useState('menu');
    const { menu } = useContext(MenuContext)

    return (
        <MainContainer>
            {menu.map((drink) => <Card local={local} key={drink.id} drink={drink} />)}
        </MainContainer>
    )
}
