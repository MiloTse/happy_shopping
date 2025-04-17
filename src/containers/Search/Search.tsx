import './style.scss';
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Search = () => {

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
                <div className="search-back iconfont"  onClick={handleGoBackClick} style={{ cursor: 'pointer' }}>
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



                        </>
                ):null
            }

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
                            <li key={index+item} className='list-item'>{item}</li>
                        )
                    })
                }


            </ul>
            <div className="title">
                Hot Search
            </div>
            <ul className="list">
                <li className='list-item'>shrimp ball</li>
                <li className='list-item'>pork</li>
                <li className='list-item'>chicken</li>
                <li className='list-item'>chip</li>
                <li className='list-item'>banana</li>
                <li className='list-item'>steak</li>
            </ul>
        </div>
    );
};

export default Search;