type CartItemType = {
    productId: string;
    imgUrl: string;
    weight: string;
    title: string;
    price: number;
    count: number;
    selected?: boolean;
}

export type ResponseDataType = {
    address: {
        id: string;
        name: string;
        phone: string;
        address: string;
    },
    time: string;
    total: number;
    shop: Array<{
        shopId: string;
        shopName: string;
        cartList: Array<CartItemType>;
    }>
}

export type ResponseType ={
    success: boolean;
    data: ResponseDataType;
};
