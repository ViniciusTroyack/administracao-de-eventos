import React from 'react'
import { useContext, useState } from 'react'
import Card from '../../components/Card'
import { MarriageContext } from '../../providers/Marriage'
import { MainContainer } from '../Menu/styles'

export default function Marriage() {
    const [local] = useState('marriage');
    const { marriageDrinks } = useContext(MarriageContext)

    return (
        <MainContainer>
            {marriageDrinks.map((drink, index) => <Card key={index} drink={drink} local={local} />)}
        </MainContainer>
    )
}
