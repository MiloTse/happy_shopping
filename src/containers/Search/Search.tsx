import './style.scss';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Search = () => {
    const navigate = useNavigate();
    const handleGoBackClick = () => {
        navigate('/home');
    };
    const [historyList, setHistoryList] = useState<string[]> ([]);
    const [keyword, setKeyword] = useState('');

    function handleKeyDown(key: string) {
        if(key === 'Enter') {
            const newHistoryList = [...historyList];
            newHistoryList.push(keyword);
            setHistoryList(newHistoryList);
            setKeyword('');

        }
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
            <div className="title">
                History Search
                <div className="iconfont title-close">&#xe610;</div>
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