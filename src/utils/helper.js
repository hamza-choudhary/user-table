import { ERROR, LOADING, SUCCESS } from '../constants/requestStates'
import { NetworkRequest } from './networkRequest'

const API_URL = 'https://jsonplaceholder.typicode.com'

function errorHandler(error, dispatch, type) {
	const errorMessage = error?.response?.data?.message ?? error.message
	dispatch({ type, payload: errorMessage })
}

export async function requestHandler(dispatch, requestType, ...properties) {
	try {
		dispatch({ type: requestType + LOADING })

		const apiCall = NetworkRequest[requestType]

		const { data } = await apiCall(API_URL, ...properties)

		dispatch({
			type: requestType + SUCCESS,
			payload: requestType.startsWith('delete') ? properties[0] : data,
		})
	} catch (error) {
		errorHandler(error, dispatch, requestType + ERROR)
	}
}
