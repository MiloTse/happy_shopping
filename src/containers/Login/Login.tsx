import './style.css'

const Login = ()=> {
    return (
        <div className="page login-page">
            <div className="tab">
                <div className="tab-item tab-item-left">login</div>
                <div className="tab-item tab-item-right">register</div>
            </div>
            <div className="form">
                <div className="form-item">
                    <div className='form-item-title'>phone number</div>
                    <input className='form-item-content' placeholder='please input phone number'/>
                </div>
                <div className="form-item">
                    <div className='form-item-title'>password</div>
                    <input type="password" className="form-item-content" placeholder="please input password"/>
                </div>
            </div>

            <div className="submit">
                login
            </div>
            <p className="notice">
                <input type="checkbox"/>
                I accept the
                <a href="#">Terms and Conditions</a>
                &
                <a href="#">Privacy Policy</a>
            </p>
        </div>


)

}

export default Login