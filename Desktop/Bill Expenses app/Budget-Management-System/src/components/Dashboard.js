import {React,Component} from "react";
import Addbutton from './add.js';
import Bills from './bills.js';
import './dashboard.css'

class Dashboard extends Component {
  render(){
  return (
    <div>
      <h1 className="dashboard-heading">Dashboard</h1>
      <Addbutton />
      <Bills />
    </div>
  );
}
};

export default Dashboard;
//export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);