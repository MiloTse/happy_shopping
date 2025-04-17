import './style.scss';

const Search = () => {

    return (
        <div className="page search-page">
            <div className="search">
                <div className="search-back iconfont">&#xe6a9;</div>
                <div className="search-area">
                    <div className="search-icon iconfont">&#xe600;</div>
                    <input className="search-input" placeholder="Please enter product name"/>
                </div>

            </div>
            <div className="title">
                History Search
                <div className="iconfont title-close">&#xe610;</div>
            </div>
            <ul className="list">
                <li className='list-item'>shrimp ball</li>
                <li className='list-item'>pork</li>
                <li className='list-item'>chicken</li>
                <li className='list-item'>chip</li>
                <li className='list-item'>banana</li>
                <li className='list-item'>steak</li>
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