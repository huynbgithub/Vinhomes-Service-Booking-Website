import "./popup.css"

export default function ProgressPopupProvider({ currentBooking, togglePop }) {

    const headerColor = {
        color:currentBooking.color,
    };
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2 style =  {headerColor}>{currentBooking.exclamation}</h2>
                <h4>Dịch vụ '{currentBooking.serviceName}' được đặt bởi {currentBooking.customerName} đã {currentBooking.status}!</h4>
                <div className="d_flex_add">
                    <button className="btn-primary margin-btn" onClick={togglePop}>Close</button>
                </div>
            </div>
        </div>
    )
}