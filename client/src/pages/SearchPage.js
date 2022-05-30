import React, {useState, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {PatientsList} from "../components/PatientsList";
import {Loader} from "../components/Loader";

export const SearchPage = () => {
    const [patients, setPatients] = useState([])
    const {loading, request} = useHttp()
    const {access} = useContext(AuthContext)
    const [form, setForm] = useState({
        string: ''
    })

    const inputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const searchHandler = async () => {
        try {
            const data = await request(`/api/v1/search?string=` + {...form}.string, 'GET', null, {
                Authorization: `Bearer ${access}`
            })
            setPatients(data)
        } catch (e) {
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            <div className="row">
                <input
                    placeholder="Input user name"
                    id="string"
                    type="text"
                    name="string"
                    onChange={inputHandler}
                />
            </div>
            <button
                className="btn grey lighten-1 black-text"
                disabled={loading}
                onClick={searchHandler}
            >Search
            </button>
            {
                !loading && <PatientsList patients={patients}/>
            }
        </>
    )
}