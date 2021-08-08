import React from 'react'
import { useContext, useState } from 'react'
import Card from '../../components/Card'
import { GraduationContext } from '../../providers/Graduation'
import { MainContainer } from '../Menu/styles'

export default function Graduation() {
    const [local] = useState('graduation');
    const { graduationDrinks } = useContext(GraduationContext)

    return (
        <MainContainer>
            {graduationDrinks.map((drink, index) => <Card key={index} drink={drink} local={local} />)}
        </MainContainer >
    )
}
