import './App.css';
import CustomerInfo from './Components/CustomerInfo';
// import CustomerInfo from './CustomerInfo';
import  Header from './Components/Header';
import Orderinfo from './Components/Orderinfo';
import Productlist from './Components/Productlist';

function App({ Customer}) {
  return (
    <div className="container" >
     < div className="start">
      <Header deatilName={"EmployeeID"} detail={Customer.EmployeeID}/>
      </div>
      <div className="site-container">
      <CustomerInfo detailInfo={"Appointment :"} detail={Customer.Appointment }/>
      <CustomerInfo detailInfo={"Email :"} detail={Customer.Email}/>
      <CustomerInfo detailInfo={"Phone :"} detail={Customer.Phone}/>
      </div>
      <div className="Order-container">
      <Orderinfo detailName={"Status"} detail= {Customer.Status}/>
      <Orderinfo detailName={"Door"} detail = {Customer.Door}/>
      <Orderinfo detailName={"Time"} detail ={Customer.Time}/>
      </div>
      <div className="footer">
      <Productlist/></div>
      </div>
      
  );
}

export default App;
