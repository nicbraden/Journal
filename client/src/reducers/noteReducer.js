import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from '../actions/types';

const initalState = {
    notes: [],
    loading: false
}

export default function (state = initalState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                //get notes from payload
                notes: action.payload,
                loading: false
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.payload)
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case NOTES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
