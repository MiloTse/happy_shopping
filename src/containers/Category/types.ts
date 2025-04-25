//返回内容类型
export type CategoryAndTagResponseType = {
    success: boolean,
    data:  {
        category: Array<{
            id: string;
            name: string;
        }>;
        tags: Array<string>;
    }
}
