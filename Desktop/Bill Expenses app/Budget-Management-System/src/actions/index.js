export const addNewBillToList = (data) => {
	return {
		type: 'ADD_NEW_BILL',
		data
	}
}

export const deleteNewBillFromList = (data) => {
	return {
		type: 'DELETE_BILL',
		data
	}
}

export const editBill = (data) => {
	return {
		type: 'EDIT_BILL',
		data
	}
}

export const initEditBill = (data) => {
	return {
		type: 'INIT_EDIT_BILL',
		data
	}
}

export const resetEditBill = () => {
	return {
		type: 'RESET_EDIT_BILL'
	}
}

export const filterBill = (data) => {
	return {
		type: 'FILTER_BILLS',
		data
	}
}

export const paybill = (data) => {
	return {
		type: 'PAY_BILL',
		data
	}
}