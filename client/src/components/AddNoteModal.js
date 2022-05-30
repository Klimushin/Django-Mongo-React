import React from 'react';
import Popup from 'reactjs-popup';
import {NoteCreate} from "./NoteCreate";

const AddNoteModal = () => (
    <Popup trigger={
        <button className="btn grey lighten-1 black-text">
            Add note
        </button>
    } position="right center"
    >
        <div>
            <NoteCreate/>
        </div>
    </Popup>
);
export default AddNoteModal;