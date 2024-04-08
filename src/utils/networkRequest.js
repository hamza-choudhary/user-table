import axios from 'axios'

export class NetworkRequest {
	static getAllUsers(API_URL, abortController) {
		return axios.get(`${API_URL}/users`, {signal: abortController.signal})
	}
	static createNewUser(API_URL, newUser) {
		return axios.post(`${API_URL}/users`, newUser)
	}
	static editUser(API_URL, id, newUser) {
		return axios.put(`${API_URL}/users/${id}`, newUser)
	}
	static deleteUser(API_URL, id) {
		return axios.delete(`${API_URL}/users/${id}`)
	}
}
