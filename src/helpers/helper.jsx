// export function getColumnNames(data) {
// 	const columnNames = new Set()

// 	data.forEach((dataObj) => {
// 		const keys = Object.keys(dataObj)
// 		keys.forEach((val) => {
// 			columnNames.add(val)
// 		})
// 	})
// 	return [...columnNames]
// }

export function getCellValue(obj, accessor) {
	if (!accessor) return undefined

	const parts = accessor.split('.')
	let current = obj
	for (const part of parts) {
		current = current?.[part]
		if (current === undefined) break
	}
	return current
}
