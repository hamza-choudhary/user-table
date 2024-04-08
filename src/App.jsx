import { useContext, useEffect, useState } from 'react'
import { getAllUsers } from './actions/userActions'
import './App.css'
import Modal from './components/modal/Modal'
import Table from './components/table/Table'
import { USER_TABLE_COLUMNS } from './components/user/userColoumns'
import { UserContext } from './context/mainContext'

export default function App() {
	const {
		data: { isLoading, isError, error, users },
		dispatch,
	} = useContext(UserContext)

	function fetchUsers() {
		let abort
		getAllUsers(dispatch, (abortController) => {
			abort = abortController
		})

		return abort
	}

	useEffect(() => {
		const abort = fetchUsers()
		return () => {
			if (abort) abort.abort()
		}
	}, [])

	if (isError) {
		return <h2>{error}</h2>
	}

	if (isLoading) {
		return <h2>Loading...</h2>
	}

	return (
		<>
			<Table columns={USER_TABLE_COLUMNS} data={users} />
		</>
	)
}
