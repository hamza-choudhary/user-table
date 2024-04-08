import PropTypes from 'prop-types'
import { getCellValue } from '../../helpers/helper'

TableRow.propTypes = {
	row: PropTypes.object,
	actions: PropTypes.array,
	columns: PropTypes.array,
}

export default function TableRow({ row = {}, columns = [] }) {
	return (
		<tr>
			{columns?.map(({ accessor, Header, Action }, idx) => (
				<td key={`body-td-${accessor}+${idx}`}>
					{!Header ? <Action rowData={row} /> : getCellValue(row, accessor)}
				</td>
			))}
			{/* {actions && (
				<>
					<td>
						{actions?.map(({ type, onClick }, idx) => (
							<button key={`actions-${idx}`} onClick={() => onClick(row)}>
								{type}
							</button>
						))}
					</td>
				</>
			)} */}
		</tr>
	)
}
