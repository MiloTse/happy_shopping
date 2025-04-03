import axios, {AxiosRequestConfig, Method} from "axios";
import {useState} from "react";

//define a custom hook to send request
function useRequest(url: string, method: Method, payload: AxiosRequestConfig) {
    const[data, setData] = useState(null);
    const[error, setError] = useState('');
    const[loaded, setLoaded] = useState(false);

    const request = async () => {
        //每次请求之前先清空之前的状态
        //clear the previous state before each request
        setData(null);
        setError('');
        setLoaded(false);

        //发送异步请求，捕捉异常
        //sending a request, catching an exception
        try{
            const response = await axios.request({
                //passing three parameters as obj
                url,
                method,
                data: payload
            });
            setData(response.data);
        }catch (e: any) {
            setError(e.message);
        }finally {
            //no matter success or fail
            setLoaded(true);
        }
        //return
        return {data, error, loaded, request};
    }


}


export default useRequest;