import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { changeDescription, search, add, clean } from "./todoActions";

import { 
    Form,
    FormControl,
    Button,
    InputGroup
} from 'react-bootstrap'

import './TodoForm.css'



class TodoForm extends Component {

  componentDidMount() {
    this.props.search()
  }

  keyHandler = e => {

    const { add, search, description } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description); 
    } else if (e.key === 'Escape' & !description) {
      search()
    }
  }
  
  render() {
    //state
    const { description } = this.props
    //action creator
    const { add, search, clean } = this.props;

    return (
      <Form className="todo-form mb-3">
        <InputGroup>
          <FormControl
            placeholder="Add a task"
            aria-label="Add a task"
            aria-describedby="basic-addon2"
            onChange={this.props.changeDescription}
            value={this.props.description}
            onKeyUp={this.keyHandler}
          />
          <InputGroup.Append>
            <Button onClick={() => add(description)}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button variant="info" onClick={search}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button variant="" onClick={clean}>
              <FontAwesomeIcon icon={faWindowClose} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}
  
const mapStateToProps = store => ({
  description: store.todo.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clean }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (TodoForm)