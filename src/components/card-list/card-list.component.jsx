import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';

export const Cardlist = props => {
    console.log(props)
    return(
        <div className='card-list'>
            {props.monsters.map( cur => (<Card key={cur.id} monster={cur} />))}
        </div>)
}

