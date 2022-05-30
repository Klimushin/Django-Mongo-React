import React from 'react'
import {NavLink} from 'react-router-dom'

export const PatientsList = ({patients}) => {
    if (!patients.length) {
        return <p className="center">Patients doesn't exists</p>
    }

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>num</th>
                    <th>patient name</th>
                </tr>
                </thead>
                <tbody>
                {patients.map((patient, index) => {
                    return (
                        <tr key={patient.id}>
                            <td>{index + 1}</td>
                            <td>
                                <NavLink to={`/detail/${patient.id}`}>{patient.user_name}</NavLink>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}