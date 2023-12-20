'use client'
const { useState, createContext, useEffect, useContext } = require("react");
import { Hub } from "aws-amplify/utils";
import { getCurrentUser } from 'aws-amplify/auth';

const UserContext = createContext({});

export default function AuthContext({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        checkUser()
    }, [])

    useEffect(() => {
        Hub.listen('auth', () => {
            checkUser()
        })
    }, [])

    async function checkUser() {
        try {
            const AmplifyUser = await getCurrentUser()
            if (AmplifyUser) {
                setUser(AmplifyUser)
            }
        }
        catch (error) {
            console.log("User unauthenticate")
            setUser(null)
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)