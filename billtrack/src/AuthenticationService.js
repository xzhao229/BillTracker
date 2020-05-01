import axios from "axios";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const BACKEND_ENDPOINT = 'http://184.72.27.92'


class AuthenticationService {
    executeBasicAuthenticationService(email, password) {
        return axios.get(`${BACKEND_ENDPOINT}/demo/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(email, password) } })
    }
    createBasicAuthToken(email, password) {
        return 'Basic ' + window.btoa(email + ":" + password)
    }


    registerSuccessfulLogin(email, password) {
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, email)
            this.setupAxiosInterceptors(this.createBasicAuthToken(email, password))
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }


    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

}

export default new AuthenticationService()
