function Header  ({ detail}) {
    return(
     <div className="Header">
        <div>
            <h1>Alan Ford</h1>
            <button class="submit">Print</button>
            <div className="employeeDetail">{detail}</div>
        </div>
   
    </div>
    )

};
export default Header;