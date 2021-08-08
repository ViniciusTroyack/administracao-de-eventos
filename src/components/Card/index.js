import React, { useState } from 'react'
import Button from '../Button';
import { Container, Image } from './styles';


export default function Card({ drink, local }) {
    const [event, setEvent] = useState([]);
    const events = [
        { id: 0, name: 'Selecione um evento' },
        { id: 1, name: 'Casamento' },
        { id: 2, name: 'Confraternização' },
        { id: 3, name: 'Formatura' }
    ]

    return (
        <Container>
            <Image class="images">
                <img src={drink.image_url} />
            </Image>
            <div className='mainCard'>
                <h1>{drink.name}</h1>
                <span>Desde: {drink.first_brewed}</span>
                <p>{drink.description}</p>
                <span>Quantidade: {drink.volume.value} {drink.volume.unit}</span>

                {local === 'menu' ? <select onChange={e => setEvent(e.target.value)}>
                    {events.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    ))}
                </select> : ''}

                <Button local={local} type={event} drink={drink} />
            </div>
        </Container>
    )
}
