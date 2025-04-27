import React from "react";
import './style.scss';
import {useNavigate} from "react-router-dom";

const items = [
    {
        name: 'Home',
        title: 'Home',
        icon: '&#xe608;',
        path: '/home'
    },
    {
        name: 'Category',
        title: 'Category',
        icon: '&#xe609;',
        path: '/category'
    },
    {
        name: 'Cart',
        title: 'Cart',
        icon: '&#xe601;',
        path: '/cart',
    },
    {
        name: 'Mine',
        title: 'Mine',
        icon: '&#xe602;',
        path: '/mine',
    }
]


function Docker   (props: {activeName:string})   {
    const navigate = useNavigate();
    const {activeName } = props;
    return (
            <div className="docker">
                {
                    items.map(
                        item => (
                            <div className= { activeName === item.name? 'docker-item docker-item-active': 'docker-item' }
                                 onClick={() => navigate(item.path)}
                                 key={item.name}
                            >
                                <p className="iconfont" dangerouslySetInnerHTML={{__html: item.icon}}/>
                                <p className="docker-item-title">{item.title}</p>
                            </div>

                        )
                    )
                }
            </div>
    );
}

export default Docker;