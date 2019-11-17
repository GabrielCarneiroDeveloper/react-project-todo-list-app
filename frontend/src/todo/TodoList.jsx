import React from 'react'

import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'

import './TodoList.css'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={
                    `description ${todo.done ? 'done' : ''}`
                }>{todo.description}</td>
                <td>
                    <Button
                        className={todo.done?'d-none':''}
                        onClick={() => props.handleMarkAsDone(todo)}
                        variant='success'>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    <Button
                        className={todo.done ? '' : 'd-none'}
                        onClick={() => props.handleMarkAsDone(todo)}
                        variant='warning'>
                        <FontAwesomeIcon icon={faUndo} />
                    </Button>
                    <Button 
                        onClick={() => props.handleRemove(todo)}
                        variant='danger'>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}