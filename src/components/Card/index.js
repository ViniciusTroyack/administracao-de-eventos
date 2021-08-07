import React, { useState } from 'react'
import Button from '../Button';
import './styles.css'

export default function Card({ drink }) {
    const [event, setEvent] = useState([]);
    const [isRemovable, setIsRemovable] = useState(false)
    const events = [
        { id: 1, name: 'Casamento' },
        { id: 2, name: 'Confraternização' },
        { id: 3, name: 'Formatura' }
    ]

    return (
        <ul>
            <li>{drink.name}</li>
            <li>Imagem</li>
            <li>{drink.first_brewed}</li>
            <li>{drink.description}</li>
            <li>{drink.volume.value}</li>
            {!isRemovable &&
                <select onChange={e => setEvent(e.target.value)}>
                    {events.map((item) => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))}
                </select>
            }
            <Button isRemovable={isRemovable} type={event} drink={drink} />
        </ul>
    )
}
