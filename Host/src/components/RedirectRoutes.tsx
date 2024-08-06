import React, { ReactElement, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { LocalStorageSessionKeys, useSessionStore } from '../stores/sessionStore'
import { Protectroute } from './Protectroute'
import { Home } from './Home'
import { NavBar } from './NavBar'
import { MFE1 } from './MFE1'
import { MFE2 } from './MFE2'
import { MFE3 } from './MFE3'
import { NotFound } from './NotFound'

export const RedirectRoutes: React.FC = (): ReactElement => {
    const sessionStorage = useSessionStore();
    const [authorized, setAuthorized] = useState<Boolean>(false);

    function getAuthorized(): void {
        if (sessionStorage.token) {
            setAuthorized(true);
            return;
        }

        if (!localStorage.getItem(LocalStorageSessionKeys.userSessionToken)) {
            setAuthorized(true);
            return;
        }

        sessionStorage.setToken(
            localStorage.getItem(LocalStorageSessionKeys.userSessionToken) as string
        )
        setAuthorized(true);
    }

    useEffect(() => {
        getAuthorized();
    }, []);

    return (
        <BrowserRouter>
            {(sessionStorage.token && <NavBar />)}
            {authorized ? (
                <Routes>
                    <Route element={<Protectroute />}>
                        <Route index element={<Home />} />
                        <Route path='mfe1/*' element={<MFE1 />} />
                        <Route path='mfe2/*' element={<MFE2 />} />
                        <Route path='mfe3/*' element={<MFE3 />} />
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            ) : (
                <div>
                    Loading ...
                </div>
            )}

        </BrowserRouter>
    )
}