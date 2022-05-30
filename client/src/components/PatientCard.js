import React, {useEffect} from 'react'
import {useMessage} from "../hooks/message.hook";
import {useHttp} from "../hooks/http.hook";
import AddNoteModal from "./AddNoteModal";

export const PatientCard = ({patient}) => {
    const message = useMessage()
    const {error, clearError} = useHttp()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    return (
        <>
            <h5>{patient.user_name}</h5>
            <AddNoteModal/>
            <table>
                <thead>
                <tr>
                    <th>Note</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {(patient.user_note).map((note) => {
                    return (
                        <tr key={note.id}>
                            <td>{note.text}</td>
                            <td>
                                {new Date(note.created_at).toLocaleString()}
                                {/*{note.created_at}*/}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>

    )
}
