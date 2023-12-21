'use client'
import { useState, createContext, useEffect, useContext } from "react";
import { Hub } from "aws-amplify/utils";
import { get } from "aws-amplify/api"
import { getUrl } from "aws-amplify/storage"
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter, usePathname } from "next/navigation";
import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
Amplify.configure(config);

const UserContext = createContext({});

export default function AuthContext({ children }) {
    const router = useRouter()
    const path = usePathname()
    const [user, setUser] = useState(null)
    // console.log('path', path)

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
                const result = await get({ apiName: 'users', path: '/getUser', options: { queryParams: { id: AmplifyUser.userId } } }).response
                const user = await result.body.json()
                let obj = {}
                Object.entries(user).forEach((value, key) => {
                    obj[value[0]] = value[1]['S']
                })
                console.log('href', !obj.imageHref)
                if (!obj.imageHref) {
                    const url = await getUrl({
                        key: 'default_profil.svg',
                        options: {
                            accessLevel: 'public', // can be 'private', 'protected', or 'guest' but defaults to `guest`
                            //   targetIdentityId?: 'XXXXXXX', // id of another user, if `accessLevel` is `guest`
                            validateObjectExistence: false,  // defaults to false
                            //   expiresIn?: 20 // validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
                            // useAccelerateEndpoint: true // Whether to use accelerate endpoint.
                        },
                    });
                    console.log(url)
                    obj.imageHref = url.url.href
                }
                setUser({ ...AmplifyUser, ...obj })
                if (path == '/login') {
                    router.replace('/')
                }
            }
        }
        catch (error) {
            console.log(error)
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