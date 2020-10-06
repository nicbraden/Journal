import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from './types';
import axios from 'axios';

export const getNotes = () => dispatch => {
    dispatch(setNotesLoading());
    //goes to router
    axios
        .get('http://localhost:8080/api/notes')
        .then(res =>
            dispatch({
                type: GET_NOTES,
                payload: res.data
            })
        )
};


export const addNote = note => dispatch => {
    axios
        //note comes from modal which carrys the data
        .post('http://localhost:8080/api/notes', note)
        .then(res =>
            dispatch({
                type: ADD_NOTE,
                //data is the new note from notes js sent to the reducer
                payload: res.data
            })
        );
};

export const deleteNote = id => dispatch => {
    axios
        .delete(`http://localhost:8080/api/notes/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_NOTE,
                payload: id
            })
        );
};


export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    }
}
