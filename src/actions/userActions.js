import {
	CREATE_NEW_USER,
	DELETE_USER,
	EDIT_USER,
	GET_ALL_USER,
} from '../constants/userActionTypes'
import { requestHandler } from '../utils/helper'

export async function getAllUsers(dispatch, handleAbortController) {
	const abortController = new AbortController()
	handleAbortController(abortController)
	await requestHandler(dispatch, GET_ALL_USER, abortController)
}

export async function createNewUser(dispatch, payload) {
	await requestHandler(dispatch, CREATE_NEW_USER, payload)
}

export async function editUser(dispatch, userId, payload) {
	await requestHandler(dispatch, EDIT_USER, userId, payload)
}

export async function deleteUser(dispatch, userId) {
	await requestHandler(dispatch, DELETE_USER, userId)
}
