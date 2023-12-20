'use client'
const { useState, createContext, useEffect, useContext } = require("react");
import { Hub } from "aws-amplify/utils";
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from "next/navigation";

const UserContext = createContext({});

export default function AuthContext({ children }) {
    const router = useRouter()
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
                router.replace('/')
                console.log(AmplifyUser)
            }
        }
        catch (error) {
            console.log("User unauthenticate")
            setUser(null)
            router.replace('/login')
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)