export const getUserMail = state => state.auth.user.email;

export const getUserStatus = state => state.auth.isLoggedIn;

export const getToken = state => state.auth.token;
