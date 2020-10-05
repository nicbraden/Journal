import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from './types';

export const getNotes = () => {
    return {
        //goes to note reducer to check type
        type: GET_NOTES
    };
};

export const deleteNote = (id) => {
    return {
        //goes to note reducer to check type
        type: DELETE_NOTE,
        payload: id
    };
};

export const addNote = note => {
    return {
        //goes to note reducer to check type
        type: ADD_NOTE,
        payload: note
    };
};