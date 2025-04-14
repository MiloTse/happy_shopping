//返回内容类型
export type ResponseType = {
    success: boolean;
    data: {
        location: {
            id: string;
            address: string;
        };
        banners: Array<{
            id: string,
            imgUrl: string
        }>
        categories: Array<{
            id: string,
            name: string,
            imgUrl: string
        }>
        fresh: Array<{
            id: string,
            name: string,
            imgUrl: string,
            price:string
        }>

    }
}
