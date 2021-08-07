import React from 'react'
import { useContext } from 'react'
import { GetTogetherContext } from '../../providers/Get-together'
import Card from '../../components/Card'

export default function GetTogether() {

    const { getTogetherDrinks } = useContext(GetTogetherContext)

    return (
        <div>
            <ul>
                {getTogetherDrinks.map((drink) => <Card key={drink.id} drink={drink} />)}
            </ul>
        </div>
    )
}
