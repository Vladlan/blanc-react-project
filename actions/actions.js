export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changePassword = (newPassword) => {
    return {
        type: CHANGE_PASSWORD,
        newPassword: newPassword
    }
};