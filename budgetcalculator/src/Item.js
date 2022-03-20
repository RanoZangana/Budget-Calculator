import React, { useState } from 'react';
import './App.css';

function Item({ item, index }) {

    return (
        <div className='Item'>
            {item.item.currency}  {item.item.category}  {item.item.date}
        </div>
    );
}

export default Item;