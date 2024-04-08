import PropTypes from 'prop-types'
import { useContext, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { createNewUser, editUser } from '../../actions/userActions'
import { UserContext } from '../../context/mainContext'
import { initialValuesUser, inputTypesUser } from '../../utils/inputTypes'

Modal.propTypes = {
	rowData: PropTypes.object,
	setIsModalOpen: PropTypes.func,
}

// export default function Modal({ rowData = null, setIsModalOpen }) {
// 	const [formData, setFormData] = useState(
// 		!rowData ? initialValuesUser : rowData
// 	)
// 	const cardRef = useRef(null)

// 	const { dispatch } = useContext(UserContext)

// 	function handleChange(e) {
// 		const { name, value } = e.target
// 		setFormData((prevData) => ({
// 			...prevData,
// 			[name]: value,
// 		}))
// 	}

// 	function submitHandler(e) {
// 		e.preventDefault()
// 		//you can handle errors in try-catch
// 		if (rowData?.id) {
// 			editUser(dispatch, rowData.id, formData)
// 		} else {
// 			createNewUser(dispatch, formData)
// 		}
// 		setIsModalOpen(false)
// 	}

// 	function handleScreenClick(e) {
// 		if (!cardRef.current.contains(e.target)) {
// 			setIsModalOpen(false)
// 		}
// 	}

// 	// if (!columns.length) return null

// 	return createPortal(
// 		<>
// 			<div
// 				onClick={handleScreenClick}
// 				style={{
// 					zIndex: 50,
// 					backgroundColor: 'rgba(0, 0, 0, 0.1)',
// 					position: 'fixed',
// 					top: 0,
// 					left: 0,
// 					width: '100vw',
// 					height: '100vh',
// 					display: 'flex',
// 					justifyContent: 'center',
// 					alignItems: 'center',
// 				}}
// 			>
// 				<div
// 					ref={cardRef}
// 					style={{
// 						width: '40rem',
// 						background: '#ccc',
// 						padding: '2rem',
// 						borderRadius: '0.5rem',
// 						overflowY: 'auto',
// 						maxHeight: '80vh',
// 						marginTop: '5rem',
// 						marginBottom: '5rem',
// 					}}
// 				>
// 					<form
// 						onSubmit={submitHandler}
// 						style={{
// 							width: '100%',
// 							display: 'flex',
// 							overflowY: 'scroll',
// 							height: 'auto',
// 							flexDirection: 'column',
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 						}}
// 					>
// 						{inputTypesUser?.map(({ type, label, id, name }, idx) => (
// 							<label
// 								style={{ color: 'black', width: '30rem' }}
// 								key={`modal-edit-${name}`}
// 								htmlFor={id}
// 							>
// 								{label}
// 								<input
// 									style={{ width: '100%', marginTop: '0.5rem' }}
// 									type={type}
// 									id={id}
// 									name={name}
// 									onChange={handleChange}
// 									value={formData[name] || ''}
// 								/>
// 							</label>
// 						))}
// 						<button>submit</button>
// 						<button onClick={() => setIsModalOpen(false)}>cancel</button>
// 					</form>
// 				</div>
// 			</div>
// 		</>,
// 		document.getElementById('portal-root')
// 	)
// }

// import { useContext, useRef, useState } from 'react'
// import { createPortal } from 'react-dom'
// import { createNewUser, editUser } from './api' // assuming these functions are defined
// import { initialValuesUser, inputTypesUser } from './constants' // assuming you have defined these constants
// import { UserContext } from './UserContext' // assuming you have a UserContext

export default function Modal({ rowData = null, setIsModalOpen }) {
	const [formData, setFormData] = useState(
		!rowData ? initialValuesUser : rowData
	)
	const cardRef = useRef(null)
	const { dispatch } = useContext(UserContext)

	function handleChange(e) {
		const { name, value } = e.target
		const updatedFormData = { ...formData }
		// Split the name into nested properties
		const propertyPath = name.split('.')
		let currentLevel = updatedFormData
		// Traverse the nested properties to update the value
		for (let i = 0; i < propertyPath.length - 1; i++) {
			currentLevel = currentLevel[propertyPath[i]]
		}
		currentLevel[propertyPath[propertyPath.length - 1]] = value
		setFormData(updatedFormData)
	}

	function submitHandler(e) {
		e.preventDefault()
		// You can handle errors in try-catch
		if (rowData?.id) {
			editUser(dispatch, rowData.id, formData)
		} else {
			createNewUser(dispatch, formData)
		}
		setIsModalOpen(false)
	}

	function handleScreenClick(e) {
		if (!cardRef.current.contains(e.target)) {
			setIsModalOpen(false)
		}
	}

	return createPortal(
		<>
			<div
				onClick={handleScreenClick}
				style={{
					zIndex: 50,
					backgroundColor: 'rgba(0, 0, 0, 0.1)',
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					ref={cardRef}
					style={{
						width: '40rem',
						background: '#ccc',
						padding: '2rem',
						borderRadius: '0.5rem',
						overflowY: 'auto',
						maxHeight: '80vh',
						marginTop: '5rem',
						marginBottom: '5rem',
					}}
				>
					<form
						onSubmit={submitHandler}
						style={{
							width: '100%',
							display: 'flex',
							overflowY: 'scroll',
							height: 'auto',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{inputTypesUser.map(({ type, label, id, name }) => (
							<label
								style={{ color: 'black', width: '30rem' }}
								key={`modal-edit-${name}`}
								htmlFor={id}
							>
								{label}
								<input
									style={{ width: '100%', marginTop: '0.5rem' }}
									type={type}
									id={id}
									name={name}
									onChange={handleChange}
									value={getValueFromFormData(formData, name) || ''}
								/>
							</label>
						))}
						<button type="submit">Submit</button>
						<button onClick={() => setIsModalOpen(false)}>Cancel</button>
					</form>
				</div>
			</div>
		</>,
		document.body
	)
}

// Utility function to get nested property value from formData
function getValueFromFormData(formData, name) {
	const propertyPath = name.split('.')
	let value = formData
	for (const property of propertyPath) {
		value = value[property]
		if (value === undefined) {
			return ''
		}
	}
	return value
}
