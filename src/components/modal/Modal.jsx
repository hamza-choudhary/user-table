import PropTypes from 'prop-types'
import { useContext, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { editUser } from '../../actions/userActions'
import { UserContext } from '../../context/mainContext'
import { inputTypesUser } from '../../utils/inputTypes'

Modal.propTypes = {
	rowData: PropTypes.object,
	setIsModalOpen: PropTypes.func,
}

export default function Modal({ rowData, setIsModalOpen }) {
	const [formData, setFormData] = useState(rowData)
	const cardRef = useRef(null)

	const { dispatch } = useContext(UserContext)

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	function submitHandler(e) {
		e.preventDefault()
		//you can handle errors in try-catch
		editUser(dispatch, rowData.id, formData)
		setIsModalOpen(false)
	}

	function handleScreenClick(e) {
		if (!cardRef.current.contains(e.target)) {
			setIsModalOpen(false)
		}
	}

	// if (!columns.length) return null

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
						{inputTypesUser?.map(({ type, label, id, name }, idx) => (
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
									value={formData[name] || ''}
								/>
							</label>
						))}
						<button>submit</button>
						<button onClick={() => setIsModalOpen(false)}>cancel</button>
					</form>
				</div>
			</div>
		</>,
		document.getElementById('portal-root')
	)
}
