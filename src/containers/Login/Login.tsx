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
                LOGIN
            </div>
            <p className="notice">
                *登录即表示同意
                <a href="#">《用户协议》</a>
                和
                <a href="#">《隐私政策》</a>
            </p>
        </div>


)

}

export default Login