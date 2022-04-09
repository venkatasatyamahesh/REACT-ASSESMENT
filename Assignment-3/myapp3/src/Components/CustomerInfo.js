function CustomerInfo({detailInfo,detail}) {
    return(
        <div className="customerinfoWrapper">
            <div className="customerLbl">{detailInfo}</div>
            <div className="customerdetail">{detail}</div>
        </div>

    );
}
export default CustomerInfo;