import React from 'react'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from './UserGuestScreen';
import { UserLoggedScreen } from './UserLoggedScreen';
import { LoadingModal } from '../../components/Shared/LoadingModal/LoadingModal';
//import { LoginScreen } from './LoginScreen';


export default function AccountScreen() {

    const [hasLogged, setHasLogged] = useState(null);

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            user ? setHasLogged(true) : setHasLogged(false)

        });

    }, []);

    if (hasLogged === null) {
        return (
            <LoadingModal show={true} text="Cargando" />
        )
    }

    return (
        hasLogged ? < UserLoggedScreen /> : <UserGuestScreen />
    );
} 