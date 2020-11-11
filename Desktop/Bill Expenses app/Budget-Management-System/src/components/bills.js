import {React,Component} from "react";
import { connect } from 'react-redux';
import { deleteNewBillFromList,editBill,initEditBill,resetEditBill  } from '../actions';

class Bills extends Component {
constructor(props)
{
	super(props)
		this.state = {
		}
}
  render(){
  let billsList = this.props.filteredBillsList ? this.props.filteredBillsList: this.props.billsList;
  return (
    billsList.map(item => {
    	return(
    	<div>
    	{this.props.editingId!==item.id && 
    	<div style={this.props.paidBills.indexOf(item.id) > -1 ? {backgroundColor:"yellow"}: {}}>
    	    <h4>id: {item.id}</h4>
    		<h4>Name: {item.name}</h4>
    		<h4>Amount: {item.value}</h4>
    		<h4>Category: {item.categoryName}</h4>
    		<button onClick={() => this.props.deleteBill(item.id)}>Delete Bill</button>
    		<button onClick={() => this.props.initEditBill(item.id)}>Edit Bill</button>
    	</div>}
    
      	{this.props.editingId===item.id && 
      	<div>
      		<input type="text" defaultValue={item.name} onChange={e => this.setState({name: e.target.value})}/>
      		<input type="text" defaultValue={item.value} onChange={e => this.setState({value: e.target.value})}/>
      		<button onClick={() => this.props.editBill({name: this.state.name, value: parseInt(this.state.value, 10), categoryName: this.state.categoryName})}>Save Changes</button>
      		<button onClick={() => this.props.resetEditBill()}>Cancel</button>
      	</div>}
    	</div>
    	);
    })
);
}
};

const mapStateToProps = (state) => {
   return {
   	billsList: state.billsList,
   	filteredBillsList: state.filteredBillsList,
   	editingId: state.editingId,
   	paidBills: state.paidBills
   }
}

const mapDispatchToProps = dispatch => {
  return {
      deleteBill: (data) => dispatch(deleteNewBillFromList(data)),
      editBill: (data) => dispatch(editBill(data)),
      initEditBill: (data) => dispatch(initEditBill(data)),
      resetEditBill: () => dispatch(resetEditBill())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills);