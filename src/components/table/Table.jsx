// import { getColumnNames } from '../../helpers/helper'
import TableRow from './TableRow'

import PropTypes from 'prop-types'

Table.propTypes = {
	data: PropTypes.array,
	actions: PropTypes.array,
	columns: PropTypes.array,
}

export default function Table({ data = [], columns = [] }) {
	if (!data) {
		return <div>No data found</div>
	}

	// console.log(data)

	// const columnNames = getColumnNames(data)

	return (
		<>
			<table>
				<thead>
					<tr>
						{columns.map(({ Header }, idx) => {
							return <td key={`${Header + idx}`}>{Header}</td>
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((row, idx) => (
						<TableRow
							key={`body-tr-${idx}`}
							row={row}
							columns={columns}
						/>
					))}
				</tbody>
			</table>
		</>
	)
}
