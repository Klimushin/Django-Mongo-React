import React, {useEffect, useState, useContext} from 'react'
import {useMessage} from "../hooks/message.hook";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";

export const PatientCreate = () => {
    const message = useMessage()
    const history = useHistory()
    const {loading, request, error, clearError} = useHttp()
    const {access} = useContext(AuthContext)
    const [form, setForm] = useState({
        user_name: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const inputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitHandler = async () => {
        try {
            const data = await request('/api/v1/patients/', 'POST', {...form}, {
                Authorization: `Bearer ${access}`
            })
            const patientId = data.id
            message(data.message)
            history.push(`detail/${patientId}`)
        } catch (e) {
        }
    }
    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">Add new patient</span>
                <div className="input-field">
                    <input
                        placeholder="Input user name"
                        id="user_name"
                        type="text"
                        name="user_name"
                        onChange={inputHandler}
                    />
                </div>
            </div>
            <div className="card-action">
                <button
                    className="btn grey lighten-1 black-text"
                    disabled={loading}
                    onClick={submitHandler}
                >
                    Create patient
                </button>
            </div>
        </div>
    )
}