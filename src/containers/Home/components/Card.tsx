import React from "react";

const Card = () => {
    return (
        <div className="card">
            <h3 className="card-title">
                <img
                    alt="新品尝鲜"
                    className="card-title-img"
                    src="http://statics.dell-lee.com/shopping/hot.png"/>
                新品尝鲜
                <div className="card-title-more">
                    more
                    <span className="iconfont">&#xe70d;</span>
                </div>
            </h3>
            <div className="card-content">

                {
                    (data?.data.fresh || []).map((item) => {
                        return (
                            <div className="card-content-item" key={item.id}>
                                <img
                                    alt={item.name}
                                    className="card-content-item-img"
                                    src={item.imgUrl}/>
                                <p className='card-content-item-desc'>{item.name}</p>
                                <div className='card-content-item-price'>
                                    <span className='card-content-item-yen'>&yen;</span>
                                    {item.price}
                                    <div className='iconfont'>&#xe6b2;</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Card;