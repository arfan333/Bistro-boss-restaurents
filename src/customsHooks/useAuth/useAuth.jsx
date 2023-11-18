/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../PROVIDERS/AUTH/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;