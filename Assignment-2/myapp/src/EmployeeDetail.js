function EmployeeDetail({ detailName, detail}) {
    return(
      <div className="employeeDetailWrapper">
        <div className="employeeDetailLbl">{detailName}</div>
        <div className="employeeDetail">{detail}</div>
      </div>
    );
  }
export default EmployeeDetail;