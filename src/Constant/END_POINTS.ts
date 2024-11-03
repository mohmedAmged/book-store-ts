const BASE_URL = `https://upskilling-egypt.com:3007`

const BASE_AUTH = `${BASE_URL}/api/auth`

export const BASE_URLS = {
    login: `${BASE_AUTH}/login`,
    register: `${BASE_AUTH}/register`,
    resetPassword: `${BASE_AUTH}/reset-password`,
    changePassword: `${BASE_AUTH}/change-password`,
    forgotPassword: `${BASE_AUTH}/forgot-password`,
    logout: `${BASE_AUTH}/logout`,
}