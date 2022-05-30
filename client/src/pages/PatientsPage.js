import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {Loader} from '../components/Loader';
import {PatientsList} from '../components/PatientsList';
import AddPatientModal from "../components/AddPatientModal";

export const PatientsPage = () => {
    const [patients, setPatients] = useState([])
    const {loading, request} = useHttp()
    const {access} = useContext(AuthContext)

    const fetchPatients = useCallback(async () => {
        try {
            const fetched = await request('/api/v1/patients', 'GET', null, {
                Authorization: `Bearer ${access}`
            })
            setPatients(fetched)
        } catch (e) {
        }
    }, [access, request])

    useEffect(() => {
        fetchPatients()
    }, [fetchPatients])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            <AddPatientModal/>
            {!loading && <PatientsList patients={patients}/>}
        </>
    )
}