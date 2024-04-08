import { useContext, useState } from 'react'
import { deleteUser } from '../../actions/userActions'
import { UserContext } from '../../context/mainContext'
import Modal from '../modal/Modal'

export const USER_TABLE_COLUMNS = [
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Username',
		accessor: 'username',
	},
	{
		Header: 'Email',
		accessor: 'email',
	},
	{
		Header: 'Website',
		accessor: 'website',
	},
	{
		Header: 'Phone',
		accessor: 'phone',
	},
	{
		Header: '',
		accessor: 'editId',
		Action: ({ rowData }) => {
			const [isModalOpen, setIsModalOpen] = useState(false)
			return (
				<>
					<button
						onClick={() => setIsModalOpen(true)}
						style={{ backgroundColor: '#f59e0b' }}
					>
						edit
					</button>
					{isModalOpen && (
						<Modal rowData={rowData} setIsModalOpen={setIsModalOpen} />
					)}
				</>
			)
		},
	},
	{
		Header: '',
		accessor: 'deleteId',
		Action: ({ rowData }) => {
			const { dispatch } = useContext(UserContext)
			return (
				<button
					onClick={() => deleteUser(dispatch, rowData.id)}
					style={{ backgroundColor: 'rgb(220 38 38)' }}
				>
					Delete
				</button>
			)
		},
	},
]
