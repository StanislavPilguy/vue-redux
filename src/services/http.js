
export function getToken() {
    return window.localStorage.getItem('token')
}

// export function setToken(token) {
//     window.localStorage.setItem('token', token)
// }

export function getHeaders() {
    return {
        "Content-type": "Application/json",
        "Authorization": "Bearer " + getToken()
    }
}

export class Http {
    static async get(url) {
        try {
            const  res = await fetch(url, {
                method: 'GET',
                headers: getHeaders()
            });
            return await res.json();
        } catch (error) {
            throw new Error(error)
        }
    }
    static async post(url, obj) {
        try {
            const  res = await fetch(url, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify(obj)
            });
            return await res.json();
        } catch (error) {
            throw new Error(error)
        }
    }

    static async put(url, obj) {
        try {
            const  res = await fetch(url, {
                method: 'PUT',
                headers: getHeaders(),
                body: JSON.stringify(obj)
            });
            return await res.json();
        } catch (error) {
            throw new Error(error)
        }
    }

    static async delete(url) {
        try {
            const  res = await fetch(url, {
                method: 'DELETE',
                headers: getHeaders()
            });
            return await res.json();
        } catch (error) {
            throw new Error(error)
        }
    }
}