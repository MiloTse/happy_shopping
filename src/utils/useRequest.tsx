import {AxiosRequestConfig} from "axios";
import {useState} from "react";

function useRequest(url: string, config: AxiosRequestConfig) {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loaded, setLoaded] = useState(false);
}


export default useRequest;