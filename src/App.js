import React from 'react';
import EmployeeData from '../data/employees.json';

class App extends React.Component {
	/**
	* Initializes the employees data read from json file in the state object.
	*/
	constructor(){
		super();
		this.state = {employees: EmployeeData.Employees};
	}

	/**
	* Search method which sets the search val in the state object.
	* It is bound with input txtbox onChange event
	*/
	search(e){
		this.setState({searchVal: e.target.value})
	}

	/**
	* Renders the complete/filtered employee list in table format based on keys/values fetched from json data
	* Search box filter looks for matching keyword in all the columns of table
	*/
	render(){
		let employees = this.state.employees;
		if(this.state.searchVal){
			employees = employees.filter( employee => {
					return employee['userId'].toLowerCase().includes(this.state.searchVal.toLowerCase())
					|| employee['jobTitleName'].toLowerCase().includes(this.state.searchVal.toLowerCase())
					|| employee['firstName'].toLowerCase().includes(this.state.searchVal.toLowerCase())
					|| employee['lastName'].toLowerCase().includes(this.state.searchVal.toLowerCase ())
					|| employee['preferredFullName'].toLowerCase().includes(this.state.searchVal.toLowerCase ())
					|| employee['employeeCode'].toLowerCase().includes(this.state.searchVal.toLowerCase ())
					|| employee['region'].toLowerCase().includes(this.state.searchVal.toLowerCase ())
					|| employee['phoneNumber'].toLowerCase().includes(this.state.searchVal.toLowerCase ())
					|| employee['emailAddress'].toLowerCase().includes(this.state.searchVal.toLowerCase ());
				}
			)
		}

		return (
		  <div>
			Search Employee: <input type="text" onChange={this.search.bind(this)}/>

			<table style={{border: '1px solid black', marginTop: '20px'}}>
				<tbody>
				{employees.map((employee, i) => {
					let empRow = [];
					Object.keys(employee).forEach((k1,v1) => {
						empRow.push(employee[k1]);
					})
					return  (<tr key={i}>
								{empRow.map((eRowItem, j) => {return <td style={{border: '1px solid black'}} key={j}>{eRowItem}</td>})}
							</tr>)
				})}
				</tbody>
			</table>
		  </div>
		)
	}
}

export default App
