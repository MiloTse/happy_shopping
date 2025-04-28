//返回内容类型
export type ResponseType = {
    success: boolean,
    data: {
        id: string;
        imgUrl: string;
        title: string;
        subtitle: string;
        price: number;
        sales: number;
        origin: string;
        specification: string;
        detail: string;

    }
}

//购物车返回内容类型
export type CartResponseType = {
    success: boolean,
    data: {
         count: number;

    }
}

//购物车数量变更返回内容类型
export type CartChangeResponseType = {
    success: boolean,
    data: boolean;
}
