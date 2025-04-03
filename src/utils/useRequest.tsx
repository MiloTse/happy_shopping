import axios, {AxiosRequestConfig, Method} from "axios";
import {useState} from "react";


//define a custom hook to send request
//step2.T 就变成了传递进来的数据类型 ResponseType
function useRequest<T>(
    url: string,
    method: Method,
    payload: AxiosRequestConfig
) {
    //step3.data的类型定义为 ResponseType | null
    //data 要么是传递进来的数据类型，要么是null
    //data either has the type passed in, or is null
    const[data, setData] = useState<T | null>(null);
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
            const response = await axios.request<T>({
                //passing three parameters as obj
                url,
                method,
                data: payload
            });
            const a = response.data;
            setData(response.data);
        }catch (e: any) {
            setError(e.message || 'unknown request error.');
        }finally {
            //no matter success or fail
            setLoaded(true);
        }
    }
    //step4. 把data 返回， 返回 data 的类型一定为 ResponseType | null
    return {data, error, loaded, request};
}

export default useRequest;