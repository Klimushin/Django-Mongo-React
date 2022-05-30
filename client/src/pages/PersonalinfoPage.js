import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {PatientCard} from '../components/PatientCard'

export const PersonalinfoPage = () => {
    const {access} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [patient, setPatient] = useState(null)
    const patientId = useParams().id

    const getPatient = useCallback(async () => {
        try {
            const fetched = await request(`/api/v1/detail/${patientId}`, 'GET', null, {
                Authorization: `Bearer ${access}`
            })
            setPatient(fetched)
        } catch (e) {
        }
    }, [access, patientId, request])

    useEffect(() => {
        getPatient()
    }, [getPatient])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && patient && <PatientCard patient={patient}/>}
        </>
    )
}