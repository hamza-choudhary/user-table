import { ERROR, LOADING, SUCCESS } from '../constants/requestStates'
import {
	CREATE_NEW_USER,
	DELETE_USER,
	EDIT_USER,
	GET_ALL_USER,
} from '../constants/userActionTypes'

export default function userReducer(state, action) {
	switch (action.type) {
		//** Get all users
		case GET_ALL_USER + LOADING:
			return { ...state, isLoading: false }
		case GET_ALL_USER + SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				users: action.payload,
			}
		case GET_ALL_USER + ERROR:
			return { ...state, isLoading: false, error: action.payload }
		//** create user
		case CREATE_NEW_USER + LOADING:
			return { ...state, isLoading: true }
		case CREATE_NEW_USER + SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				users: [...state.users, action.payload],
			}
		case CREATE_NEW_USER + ERROR:
			return { ...state, isLoading: false, error: action.payload }
		//** edit user
		case EDIT_USER + LOADING:
			return { ...state, isLoading: true }
		case EDIT_USER + SUCCESS:
			return {
				...state,
				isLoading: false,
				users: state.users.map((user) => {
					if (user.id === action.payload.id) {
						return action.payload
					} else {
						return user
					}
				}),
			}
		case EDIT_USER + ERROR:
			return { ...state, isLoading: false, error: action.payload }
		//** delete user
		case DELETE_USER + LOADING:
			return { ...state, isLoading: true }
		case DELETE_USER + SUCCESS:
			return {
				...state,
				isLoading: false,
				users: state.users.filter((user) => user.id !== action.payload),
			}
		case DELETE_USER + ERROR:
			return { ...state, isLoading: false, error: action.payload }
	}
}
