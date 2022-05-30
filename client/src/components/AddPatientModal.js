import React from 'react';
import Popup from 'reactjs-popup';
import {PatientCreate} from "./PatientCreate";

const AddPatientModal = () => (
    <Popup trigger={
        <button className="btn grey lighten-1 black-text" >
            Add patient
        </button>
    }
    >
        <div><PatientCreate/></div>
    </Popup>
);
export default AddPatientModal;