import './style.scss';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import useRequest from "../../utils/useRequest";
import type {ResponseType} from "./types";


//defaultRequestData
const defaultRequestData = {
    url: '/hotSearchList.json',
    method: 'GET',

}

const Search = () => {
    const {data} = useRequest<ResponseType>(defaultRequestData);
    const hotList = data?.data || [];




    const localSearchList= localStorage.getItem('search-list');
    const searchHistory: string[] = localSearchList ? JSON.parse(localSearchList) : [];


    const navigate = useNavigate();
    const handleGoBackClick = () => {
        navigate('/home');
    };
    //load search history from local storage
    const [historyList, setHistoryList] = useState (searchHistory);
    const [keyword, setKeyword] = useState('');

    function handleKeyDown(key: string) {
        if(key === 'Enter') {
            const newHistoryList = [...historyList];
            newHistoryList.unshift(keyword);
            if(newHistoryList.length > 5) {
                newHistoryList.pop();
            }
            setHistoryList(newHistoryList);
            setKeyword('');
            localStorage.setItem('search-list', JSON.stringify(newHistoryList));

        }
    }

    function handleHistoryListClean(){
        setHistoryList([]);
        localStorage.setItem('search-list', JSON.stringify([]));
    }
    return (
        <div className="page search-page">
            <div className="search">
                <div className="search-back-icon iconfont"  onClick={handleGoBackClick} style={{ cursor: 'pointer' }}>
                    &#xe6a9;</div>
                <div className="search-area">
                    <div className="search-icon iconfont">&#xe600;</div>
                    <input
                        className="search-input"
                           placeholder="Please enter product name"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => {handleKeyDown(e.key)} }
                    />
                </div>

            </div>

            {
                historyList.length? (
                    <>

                        <div className="title">
                            History Search
                            <div onClick={handleHistoryListClean}
                                 className="iconfont title-close"
                            >
                                &#xe610;</div>
                        </div>

                        <ul className="list">
                            {
                                historyList.map((item, index) => {
                                    return (
                                        <li key={index + item} className='list-item'>{item}</li>
                                    )
                                })
                            }


                        </ul>
                    </>
                ) : null
            }

            {
                hotList.length? (
                    <>
                        <div className="title">
                            Hot Search
                        </div>
                        <ul className="list">
                            {
                                hotList.map(item =>
                                    (
                                        <li key={item.id} className='list-item'>{item.keyword}</li>
                                    )
                                )
                            }
                         </ul>

                    </>


                ) : null
            }

        </div>
    );
};

export default Search;