import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [access, setAccess] = useState(null)
    const [ready, setReady] = useState(false)

    const login = useCallback((jwtToken) => {
        setAccess(jwtToken)

        localStorage.setItem(storageName, JSON.stringify({
            access: jwtToken
        }))
    }, [])


    const logout = useCallback(() => {
        setAccess(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.access) {
            login(data.access)
        }
        setReady(true)
    }, [login])


    return {login, logout, access, ready}
}