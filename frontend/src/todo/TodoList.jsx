import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'
import { bindActionCreators } from 'redux'
import { markAsDoneOrNot, remove } from "./todoActions";

import './TodoList.css'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
          <tr key={todo._id}>
            <td className={`description ${todo.done ? "done" : ""}`}>
              {todo.description}
            </td>
            <td>
              <Button
                className={todo.done ? "d-none" : ""}
                onClick={() => props.markAsDoneOrNot(todo, true)}
                variant="success"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button
                className={todo.done ? "" : "d-none"}
                onClick={() => props.markAsDoneOrNot(todo, false)}
                variant="warning"
              >
                <FontAwesomeIcon icon={faUndo} />
              </Button>
              <Button onClick={() => props.remove(todo)} variant="danger">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
        ));
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    );
}

// getting todo list from redux state management
const mapStateToProps = store => ({ list: store.todo.list })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDoneOrNot, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);