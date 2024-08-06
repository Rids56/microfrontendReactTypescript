import React, { ReactElement } from 'react';
import '../../assets/styles.css'
import { useSessionStore } from '../../stores/sessionStore';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = (): ReactElement => {
    const navigate = useNavigate();
    const sessionStore = useSessionStore();
    return (
        <div className='container'>
            <div className='login'>
                <span>Welcome!</span>
                <button onClick={() => {
                    sessionStore.setToken('secret-token');
                    navigate('/');
                }}>
                    Click to perform a fake login!
                </button>
            </div>
        </div>
    )
}
