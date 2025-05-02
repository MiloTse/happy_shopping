export type CartItemType = {
    productId: string;
    imgUrl: string;
    weight: string;
    title: string;
    price: number;
    count: number;
    selected?: boolean;
}


export type ResponseType = {
    success: boolean,
    data:  Array<{
        shopId: string;
        shopName: string;
        cartList: Array<CartItemType>;
    }>,
}
