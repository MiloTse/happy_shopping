import './style.scss'
import {useState} from "react";
import axios from "axios";


const Login = ()=> {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    //发送请求相关数据定义
    //define the data related to sending request
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loaded,setLoaded] = useState(false);

    function handleSubmitBtnClick() {
        axios.get('/charlestest.json').then((response)=>{
            setLoaded(true);
            setData(response.data);

        }).catch((error)=>{
            console.log(error);
            setLoaded(true);
            setError(error.message);
        })
    }

    if(loaded){
        setLoaded(false);
        if(data){
            alert("request success");
        }else{
           alert(error);
        }
    }

    return (
        <div className="page login-page">
            <div className="tab">
                <div className="tab-item tab-item-left">login</div>
                <div className="tab-item tab-item-right">register</div>
            </div>
            <div className="form">
                <div className="form-item">
                    <div className='form-item-title'>phone number</div>
                    <input value={phoneNumber}
                           className='form-item-content'
                           placeholder='please input phone number'
                           onChange={(e)=>{
                               setPhoneNumber(e.target.value);
                           }}
                    />
                </div>
                <div className="form-item">
                    <div className='form-item-title'>password</div>
                    <input value={password}
                           type="password"
                           className="form-item-content"
                           placeholder="please input password"
                           onChange={(e)=>{
                               setPassword(e.target.value);
                           }}
                    />
                </div>
            </div>

            <div className="submit" onClick={handleSubmitBtnClick}>
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