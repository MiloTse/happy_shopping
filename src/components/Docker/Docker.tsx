import React from "react";
import './style.scss';
import {useNavigate} from "react-router-dom";

const items = [
    {
        title: 'Home',
        icon: '&#xe608;',
        path: '/home'
    },
    {
        title: 'Category',
        icon: '&#xe609;',
        path: '/category'
    },
    {
        title: 'Cart',
        icon: '&#xe601;',
        path: '/cart',
    },
    {
        title: 'Mine',
        icon: '&#xe602;',
        path: '/mine',
    }
]


function Docker   ()   {
    const navigate = useNavigate();
    return (
            <div className="docker">
                {
                    items.map(
                        item => (
                            <div className="docker-item docker-item-active"
                                 onClick={() => navigate(item.path)}
                                 key={item.title}
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