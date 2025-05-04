import './style.scss';





 function Order() {
    return (
        <div className="page order-page">
            <div className='title'>Confirm Order</div>
            <div className='receiver'>
                <div className='iconfont'> </div>
                <div className='receiver-content'>
                    <div className='receiver-name'>
                         Receiver: Tom
                        <span className='receiver-phone'>12345678900</span>
                    </div>
                    <div className='receiver-address'>
                        Address: 1385 Woodroffe Avenue, Ottawa, ON, K2G 1V8
                    </div>
                </div>

            </div>
        </div>
 )
 }


 export default Order;