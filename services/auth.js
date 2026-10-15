import User from '../models/user.js'
import { MARTHA_URL, MARTHA_AUTH } from "../config/config.js";

export class AuthService {
    #currentUser = null // ATTENTION, à utiliser judicieusement
    

    get currentUser() {
        return this.#currentUser
    }

    async signUp(credentials) {
        const response = await fetch(`${MARTHA_URL}/insert-user/execute`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'auth': MARTHA_AUTH
            }
        }).then((r) => r.json())

        if (response.success)  {
            this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username })
        }

        return !!this.#currentUser
    }

    async logIn(credentials) {
        const response = await fetch(`${MARTHA_URL}/select-user-auth/execute`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'auth': MARTHA_AUTH
            }
        }).then((r) => r.json())

        if (response.success && response.data.length == 1)  {
            const user = response.data[0]

            this.#currentUser = new User({ id: user.id, username: user.username })
        } else {
            this.#currentUser = null
        }

        return !!this.#currentUser
    }

    logOut() {
      this.#currentUser = null
    }

}

const service = new AuthService();
export default service;