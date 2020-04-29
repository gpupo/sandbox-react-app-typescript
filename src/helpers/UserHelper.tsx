import React, {FunctionComponent} from 'react';

export type UserProps = {
    firstName: string,
    lastName: string,
}

export const UserHelper: FunctionComponent<UserProps> = ({ firstName, lastName = 'Bar' }) => 
    <h3>Hello { firstName } { lastName }!</h3>

export default UserHelper;
