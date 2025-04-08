import axios, {AxiosRequestConfig} from "axios";
import {useState, useRef} from "react";


//define a custom hook to send request
//step2.T 就变成了传递进来的数据类型 ResponseType
function useRequest<T>(options: AxiosRequestConfig
) {
    //step3.data的类型定义为 ResponseType | null
    //data 要么是传递进来的数据类型，要么是null
    //data either has the type passed in, or is null
    const[data, setData] = useState<T | null>(null);
    const[error, setError] = useState('');
    const[loaded, setLoaded] = useState(false);
    //define a controller to stop req
    //它的改变不需要重新渲染，所以用useRef
    //it doesn't need to be re-rendered, so use useRef
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
        controllerRef.current.abort();
    }

    const request = async () => {
        //每次请求之前先清空之前的状态
        //clear the previous state before each request
        setData(null);
        setError('');
        setLoaded(false);

        //发送异步请求，捕捉异常
        //sending a request, catching an exception
        return axios.request<T>({
                //passing three parameters as obj
                url: options.url,
                method: options.method,
                signal: controllerRef.current.signal,
                data: options.data,
                params: options.params
            }).then(response => {
                setData(response.data);
                return response.data;
            }).catch(e => {
                setError(e.message || 'unknown request error.');
                throw new Error(e);
            }).finally(()=>{
                setLoaded(true);
            })
    }
    //step4. 把data 返回， 返回 data 的类型一定为 ResponseType | null
    return {data, error, loaded, request, cancel};
}

export default useRequest;