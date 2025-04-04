import './style.scss'
import {useEffect, useState} from "react";
import useRequest from "../../utils/useRequest";

//1. 首先定义接口返回内容
type ResponseData = {
    name: string;
}

const Login = ()=> {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    //use custom hook to send request
    //step1. 通过泛型传递给useRequest 方法
    //step5.接受data 类型也一定为 ResponseType | null
    const { data, error, loaded, request, cancel } = useRequest<ResponseData>('/charlestest.json', 'GET', {});

    function handleSubmitBtnClick() {
        request();
        //added invoke cancel function to test, won't be found the data charlestest.json on network tab
        // cancel();
    }

    //当点击的时候，请求发了，数据改了，页面也跟着渲染了。渲染完成后给个提示，用useEffect. 把提示放在dom渲染完成之后做
    useEffect(()=>{
        //data或者error变化了，执行这个函数
        if(data) {
            alert('login success');
        }
        if(error) {
            alert('login fail');
        }
    },[data, error]);//用到了data和error，函数依赖这里要加上

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