import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderApp } from './styles';


export default function Header() {
    const history = useHistory();
    return (

        <HeaderApp>
            <div>
                <button onClick={() => history.push('/')}>Menu</button>
            </div>
            <div className='divNav'>
                <button onClick={() => history.push('/marriage')}>Casamento</button>
                <button onClick={() => history.push('/gettogether')}>Confraternização</button>
                <button onClick={() => history.push('/graduation')}>Formatura</button>
            </div>

        </HeaderApp>
    )
}
