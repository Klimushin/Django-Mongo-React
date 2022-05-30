import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useParams} from "react-router-dom";
import {useMessage} from "../hooks/message.hook";
import {useHttp} from "../hooks/http.hook";

export const NoteCreate = ({patient}) => {
    const {access} = useContext(AuthContext)
    const patientId = useParams().id
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        user: patientId, text: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const textHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addHandler = async () => {
        try {
            const data = await request('/api/v1/add-notes/', 'POST', {...form}, {
                Authorization: `Bearer ${access}`
            })
            window.location.reload()
            message(data.message)
        } catch (e) {
        }
    }

    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">Add note</span>
                <div className="input-field">
                    <input
                        placeholder="Input text"
                        id="note"
                        type="text"
                        name="text"
                        onChange={textHandler}
                    />
                </div>
            </div>
            <div className="card-action">
                <button
                    className="btn grey lighten-1 black-text"
                    disabled={loading}
                    onClick={addHandler}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}