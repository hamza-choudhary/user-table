import { useState } from 'react'
import Modal from '../components/modal/Modal'
import Table from '../components/table/Table'
import { DUMMY_TABLE_DATA } from '../components/table/constants'


export default function App() {
	const [data, setData] = useState(DUMMY_TABLE_DATA)
	const [modalData, setModalData] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	function editHandler(rowData) {
		setModalData(rowData)
		setIsModalOpen(true)
	}

	function editSubmitHandler(updatedData, rowData) {
		setData((prevData) => {
			const idx = prevData.findIndex((item) => item.id === rowData.id)
			const newData = [...prevData]
			newData[idx] = updatedData
			return newData
		})
	}

	function deleteHandler(rowData) {
		alert(`are you sure you want to delete data of id=${rowData.id}?`)
		setData((prevData) => {
			const newData = prevData.filter((item) => item.id !== rowData.id)
			return newData
		})
	}

	const actions = [
		{
			type: 'delete',
			onClick: deleteHandler,
		},
		{
			type: 'edit',
			onClick: editHandler,
		},
	]

	const columns = [
		{ header: 'ID', accessor: 'id' },
		{ header: 'Full Name', accessor: 'name' },
		{ header: 'Email', accessor: 'email' },
		{ header: 'Address', accessor: 'address.street' },
		{ header: 'Phone', accessor: 'phone' },
	]

	return (
		<>
			<Table columns={columns} data={data} actions={actions} />
			{isModalOpen && (
				<Modal
					rowData={modalData}
					setIsModalOpen={setIsModalOpen}
					onSubmit={editSubmitHandler}
					columns={columns}
				/>
			)}
		</>
	)
}
