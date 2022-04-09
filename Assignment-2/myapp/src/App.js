
import './App.css';
import EmployeeDetail from "./EmployeeDetail";

function App({ employee}) {
  return (
    <div className="container">
      <img className="employeeImg" src={employee.profileImg} alt="Employee"/>
      <div className="employeeName">{employee.name}</div>
      <EmployeeDetail detailName={"location"} detail={employee.location} />
      <EmployeeDetail detailName={"Blood Group"} detail={employee.bloodGroup} />
      <EmployeeDetail detailName={"Age"} detail={employee.age} />
    </div>
  );
}
export default App;
