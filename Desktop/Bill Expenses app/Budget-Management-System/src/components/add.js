import {React,Component} from "react";
import { addNewBillToList, filterBill, paybill } from '../actions';
import { connect } from 'react-redux';
import './add.css';

class Addbutton extends Component {
constructor(props)
{
	super(props)
		this.state = {
			name: undefined,
			value: undefined,
			categoryName: undefined,
			filtercategory: undefined
		}
}
  render(){
  return (
  	<div className="container">
  	<div className="row">
  	<div className="col-sm-4">
  	<input type="number" placeholder="Enter Budget" onChange={(e) => this.props.paybill(e.target.value)}/>
  	</div>

    <div className="col-sm-4">
      	<input type="text" placeholder="Bill description" onChange={(e) => this.setState({name: e.target.value})}/>
      	<div className="product-category">
      	<label for="category" >Choose a category:</label>
		<select name="category" id="category" onChange={(e) => this.setState({categoryName: e.target.value})}>
		  <option value="Select">select</option>
		  <option value="Food">Food</option>
		  <option value="Shopping">Shopping</option>
		  <option value="Personal Care">Personal Care</option>
		  <option value="Education">Education</option>
		</select>
		</div>
      	<input type="number" placeholder="Amount" onChange={(e) => this.setState({value: e.target.value})}/>
      	<div className="add-button">
      	<button onClick={() => this.props.addNewBill({name: this.state.name, categoryName: this.state.categoryName, value: parseInt(this.state.value, 10)})}>Add Bill</button>
    	</div>
    </div>

      	<div className="col-sm-4">
      	<label for="category" >Filter Basis on Category: </label>
		<select name="category" id="category" onChange={(e) => this.props.filterBill(e.target.value)}>
		  <option value="Select">select</option>
		  <option value="all">all</option>
		  <option value="Food">Food</option>
		  <option value="Shopping">Shopping</option>
		  <option value="Personal Care">Personal Care</option>
		  <option value="Education">Education</option>
		</select>
		</div>
    </div>
    </div>
  );
}
};


const mapStateToProps = (state) => {

}

const mapDispatchToProps = dispatch => {
  return {
    addNewBill: (data) => dispatch(addNewBillToList(data)),
    filterBill: (data) => dispatch(filterBill(data)),
    paybill: (data) => dispatch(paybill(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addbutton);