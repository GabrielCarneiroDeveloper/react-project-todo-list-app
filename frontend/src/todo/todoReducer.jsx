const INITIAL_STATE = {
  description: "",
  list: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "DESCRIPTION_CHANGED":
            return { ...state, description: action.payload };

        case "TODO_SEARCHED":
            return { ...state, list: action.payload };

        case "TODO_FORM_IS_CLEANED":
            return { ...state, description: INITIAL_STATE.description};

        default:
            return state;
    }
}