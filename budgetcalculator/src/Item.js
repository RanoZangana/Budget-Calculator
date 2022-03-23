import React, { useState } from 'react';
import './App.css';

function Item({ item, index }) {

    return (
        <div className='Item'>
            {item.currency}  {item.category}  {item.date}
        </div>
    );
}

export default Item;