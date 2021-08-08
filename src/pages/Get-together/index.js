import React from 'react'
import { useContext, useState } from 'react'
import { GetTogetherContext } from '../../providers/Get-together'
import Card from '../../components/Card'
import { MainContainer } from '../Menu/styles'

export default function GetTogether() {
    const [local] = useState('gettogether');
    const { getTogetherDrinks } = useContext(GetTogetherContext)

    return (
        <MainContainer>
            {getTogetherDrinks.map((drink, index) => <Card key={index} drink={drink} local={local} />)}
        </MainContainer>
    )
}
