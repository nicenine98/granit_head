import { axios } from '../../../lib/axios';

import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

type returnRegisterCredentialsDTO = (
    data: RegisterCredentialsDTO
) => Promise<UserResponse>;

export const registerWithEmailAndPassword: returnRegisterCredentialsDTO = ( data ) => {
    return axios.post('/auth/register', data);
};
