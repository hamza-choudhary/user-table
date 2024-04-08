import { useReducer } from 'react'
import userReducer from '../reducers/userReducer'
import { UserContext } from './mainContext'

const initialUserData = {
	isLoading: true,
	isError: false,
	error: '',
	users: [],
	showModal: false,
}

export default function USER({ children }) {
	const [usersData, userDispatch] = useReducer(userReducer, initialUserData)

	return (
		<UserContext.Provider value={{ data: usersData, dispatch: userDispatch }}>
			{children}
		</UserContext.Provider>
	)
}
