import React, { ReactElement } from 'react'
import { useSessionStore } from '../stores/sessionStore'
import { Navigate, Outlet } from 'react-router-dom';

export const Protectroute: React.FC = (): ReactElement => {
    const sessionStore = useSessionStore();
    return sessionStore.token ? <Outlet /> : <Navigate to="/login" />
}