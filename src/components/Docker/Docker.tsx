import React from "react";
import './style.scss';
import {useNavigate} from "react-router-dom";

const items = [
    {
        name: 'Home',
        text: 'Home',
        icon: '&#xe608;',
        path: '/home'
    },
    {
        name: 'Category',
        text: 'Category',
        icon: '&#xe609;',
        path: '/category'
    },
    {
        name: 'Cart',
        text: 'Cart',
        icon: '&#xe601;',
        path: '/cart',
    },
    {
        name: 'Mine',
        text: 'Mine',
        icon: '&#xe602;',
        path: '/mine',
    }
]


function Docker   (props: {activeName:string})   {
    const navigate = useNavigate();
    const {activeName } = props;
    console.log(activeName)
    return (
            <div className="docker">
                {
                    items.map(  item => (
                            <div className= { activeName.toLowerCase() === item.name.toLowerCase() ?
                                'docker-item docker-item-active'
                                : 'docker-item' }
                                 onClick={() => navigate(item.path)}
                                 key={item.name}
                            >
                                <p className="iconfont" dangerouslySetInnerHTML={{__html: item.icon}}/>
                                <p className="docker-item-title">{item.text}</p>
                            </div>

                        )
                    )
                }
            </div>
    );
}

export default Docker;