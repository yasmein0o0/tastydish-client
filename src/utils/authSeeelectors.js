
export const selectAuthState = (state) =>
    state.auth || state.user || state.login || {};

// Safe token access with fallbacks
export const selectAccessToken = (state) => {
    const auth = selectAuthState(state);
    return auth?.token ||
        auth?.accessToken ||
        auth?.data?.token ||
        auth?.data?.accessToken ||
        null;
};

// Check if user is authenticated
export const selectIsAuthenticated = (state) => {
    const token = selectAccessToken(state);
    return !!token && !isTokenExpired(token);
};

// Get user data safely
export const selectUserData = (state) => {
    const auth = selectAuthState(state);
    return auth?.user ||
        auth?.data?.user ||
        auth?.data ||
        null;
};

// Token expiration check
const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    } catch {
        return false;
    }
};