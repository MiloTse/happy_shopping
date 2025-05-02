type CartItemType = {
    productId: string;
    imgUrl: string;
    weight: string;
    title: string;
    price: number;
    count: number;
    selected?: boolean;
}

export type ListItemType = {
    shopId: string;
    shopName: string;
    cartList: Array<CartItemType>;
}
export type ResponseType = {
    success: boolean,
    data:  Array<ListItemType>,
}
