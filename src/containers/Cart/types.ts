//返回内容类型
export type ResponseType = {
    success: boolean,
    data:  Array<{
        shopId: string;
        shopName: string;
        cartList: Array<{
            productId: string;
            imgUrl: string;
            weight: string;
            title: string;
            price: number;
            count: number;
        }>;



    }>,
}
