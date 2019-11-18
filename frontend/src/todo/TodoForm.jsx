import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import { 
    Form,
    FormControl,
    Button,
    InputGroup
} from 'react-bootstrap'

import './TodoForm.css'

export default props => {

  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd() 
    } else if (e.key === 'Escape' & !props.description) {
      props.handleSearch()
    }
  }
  
  return (
    <Form className="todo-form mb-3">
      <InputGroup>
        <FormControl
          placeholder="Add a task"
          aria-label="Add a task"
          aria-describedby="basic-addon2"
          onChange={props.handleChange}
          value={props.description}
          onKeyUp={keyHandler}
        />
        <InputGroup.Append>
          <Button onClick={props.handleAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InputGroup.Append>
        <InputGroup.Append>
          <Button variant='info' onClick={props.handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}
  

  //   <div
  //     role="form"
  //     className="
  //     todo-form"
  //   >
  //     <div className="row">
  //       <div className="col-xs-12 col-sm-9 col-md-10">
  //         <input
  //           id="description"
  //           className="form-control"
  //           placeholder="Add a task"
  //         />
  //       </div>

  //       <div className="col-xs-12 col-sm-3 col-md-2">
  //         <button className="btn btn-primary">
  //           <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
// );