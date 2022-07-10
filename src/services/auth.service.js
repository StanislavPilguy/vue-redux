import {Http} from "@/services/http";


export class AuthService {

    static async login(email, password) {
        try {
            return await Http.post('http://81.28.6.88:5000/auth/log-in',
                {
                    email,
                    password
                })
        } catch (e) {
            throw new Error(e)
        }
    }

    static async register(email, password) {
        try {
            return await Http.post('', {email, password})
        } catch (e) {
            throw new Error(e)
        }
    }

}