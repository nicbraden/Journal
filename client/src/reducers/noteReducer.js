import { v1 as uuid } from "uuid";
import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from '../actions/types';

const initalState = {
    notes: [
        {
            id: uuid(),
            "title": "hello",
            "mood": "hi",
            "note": "welcome"
        },
        {
            id: uuid(),
            "title": "bye",
            "mood": "cya",
            "note": "goodbye"
        },
        {
            id: uuid(),
            "title": "hmm",
            "mood": "huh",
            "note": "Idunno"
        }
    ]
}

export default function (state = initalState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        default:
            return state;
    }
}