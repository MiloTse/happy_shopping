import axios, {AxiosRequestConfig, Method} from "axios";
import {useState} from "react";

function useRequest(url: string, method: Method, payload: AxiosRequestConfig) {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loaded, setLoaded] = useState(false);

    const request = async () => {
        try{
            const response = await axios.request({
                //passing three parameters as obj
                url,
                method,
                data: payload
            });
            setData(response.data);
        }catch (e: any) {
            console.log(e.message);
            setError(e.message);
        }finally {
            //no matter success or fail
            setLoaded(true);
        }
    }


}


export default useRequest;