const initialState={
	billsList: [],
  paidBills:[],
  counter: 0,
  filteredBillsList: undefined,
  editingId: '',
	totalBudget: 0
};
function reducer(state = initialState, action) {
switch(action.type) {  
	case 'ADD_NEW_BILL':
    return {
      ...state,
      counter: state.counter + 1,
      billsList: [...state.billsList, {...action.data, id: state.counter + 1}]
    };  
    case 'DELETE_BILL':
    return {
      ...state,
      billsList: state.billsList.filter(item => item.id !== action.data)
    };
    case 'EDIT_BILL':
    return {
      ...state,
      editingId: '',
      billsList: state.billsList.map(item => {
        if(item.id === state.editingId) {
          return {
            id: item.id,
            name: action.data.name ? action.data.name: item.name,
            value: action.data.value ? action.data.value: item.value,
            categoryName: action.data.categoryName ? action.data.categoryName: item.categoryName
          }
        } else {
          return item
        }
      })
    };   
    case 'INIT_EDIT_BILL': 
    return {
      ...state,
      editingId: action.data
    }
    case 'RESET_EDIT_BILL':
    return {
      ...state,
      editingId: ''
    }
    case 'FILTER_BILLS':
    return {
      ...state,
      filteredBillsList: action.data == 'all' ? undefined : state.billsList.filter(item => item.categoryName === action.data)
    };
    case 'PAY_BILL': 
    let tempsort = [...state.billsList]
    let sortedArray  = tempsort.sort((a,b) => a.value > b.value ? 1: -1)
    let priceCounter = 0;
    let paidBills = [];
    sortedArray.map(item => {
      //action.data
       if(item.value + priceCounter <= action.data) {
        priceCounter += item.value;
         paidBills.push(item.id);
       }
    })
     return {
      ...state,
      paidBills
     }
    default:
    return state;
  }
}
export default reducer;