import React from 'react'

import './Header.css'

export default props => 
    <header className='pb-2 mt-4 mb-4 ml-2 mr-2 border-bottom'>
        <h2>{props.name} <small className='small'>{props.small}</small></h2>
    </header>