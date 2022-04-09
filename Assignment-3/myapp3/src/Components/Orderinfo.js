function Orderinfo({detailName,detail}){
    return (
        <div className="OrderStatus">
            <div className="customerstatus">{detailName}</div>
            <div className="customerdetail">{detail}</div>
            </div>
    );
    }
export default Orderinfo;