import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

//Action creator

// action
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {

    /*getState() -> get current todo description value directly from store
    * not a good practice. getState() is configured by 'thunk' middleware
    */
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : "";
        axios.get(`${URL}/?sort=-createdAt${search}`)
            .then(response => dispatch({ type: "TODO_SEARCHED", payload: response.data }))
    }
}

// export const add = async (description) => {
//     const request = await axios.post(URL, { description })
//     return [
//         {type: 'TODO_ADDED',payload: request},
//         search()
//     ]
// }

// ensure search() is called only after axios POST return
// Curious: just using async await solve the asynchronous problem
export const add = description => {
    return dispatch => {
        axios
          .post(URL, { description })
          .then(response =>
            dispatch({ type: "TODO_FORM_IS_CLEANED", payload: response.data })
          )
          .then(() => dispatch(search()));
    }
}

export const markAsDoneOrNot = (todo, done) => {
    // await axios.put(`${URL}/${todo._id}`, { ...todo, done })
    // return [ search() ]

    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done })
            .then( response => dispatch(
                { type: 'TODO_MARKED_AS_DONE_OR_NOT', payload: response.data })
            )
            .then(() => dispatch(search()))
    }
}

// 'multi' approach - allow perform many dispatches
// export const remove = async todo => {
//     await axios.delete(`${URL}/${todo._id}`);
//     return [ search() ]
// }

// 'thunk' approach - the dispatch() is deliveried to be customized
export const remove = async todo => {

    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => dispatch(search()))
    }
}


export const clean = () => [
    { type: "TODO_FORM_IS_CLEANED" },
    search()
];