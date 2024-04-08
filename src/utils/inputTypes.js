export const initialValuesUser = {
	name: '',
	username: '',
	email: '',
	address: {
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		geo: {
			lat: '',
			lng: '',
		},
	},
	phone: '',
	website: '',
	company: {
		name: '',
		catchPhrase: '',
		bs: '',
	},
}

export const inputTypesUser = [
	{
		type: 'text',
		label: 'Name',
		id: 'name',
		name: 'name',
	},
	{
		type: 'text',
		label: 'Username',
		id: 'username',
		name: 'username',
	},
	{
		type: 'email',
		label: 'Email',
		id: 'email',
		name: 'email',
	},
	{
		type: 'text',
		label: 'Street',
		id: 'address.street',
		name: 'address.street',
	},
	{
		type: 'text',
		label: 'Suite',
		id: 'address.suite',
		name: 'address.suite',
	},
	{
		type: 'text',
		label: 'City',
		id: 'address.city',
		name: 'address.city',
	},
	{
		type: 'text',
		label: 'Zipcode',
		id: 'address.zipcode',
		name: 'address.zipcode',
	},
	{
		type: 'text',
		label: 'Latitude',
		id: 'address.geo.lat',
		name: 'address.geo.lat',
	},
	{
		type: 'text',
		label: 'Longitude',
		id: 'address.geo.lng',
		name: 'address.geo.lng',
	},
	{
		type: 'text',
		label: 'Phone',
		id: 'phone',
		name: 'phone',
	},
	{
		type: 'text',
		label: 'Website',
		id: 'website',
		name: 'website',
	},
	{
		type: 'text',
		label: 'Company Name',
		id: 'company.name',
		name: 'company.name',
	},
	{
		type: 'text',
		label: 'Catch Phrase',
		id: 'company.catchPhrase',
		name: 'company.catchPhrase',
	},
	{
		type: 'text',
		label: 'BS',
		id: 'company.bs',
		name: 'company.bs',
	},
]
