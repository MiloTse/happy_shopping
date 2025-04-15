


export type LocationType = Array<{
    id: string;
    address: string;
}>
export type BannersType = Array<{
    id: string,
    imgUrl: string
}>

//分类信息类型
export type CategoriesType = Array<{
    id: string,
    name: string,
    imgUrl: string
}>


//返回内容类型
export type ResponseType = {
    success: boolean;
    data: {
        location: LocationType;
        banners: BannersType;
        categories: CategoriesType;

        fresh: Array<{
            id: string,
            name: string,
            imgUrl: string,
            price:string
        }>

    }
}
