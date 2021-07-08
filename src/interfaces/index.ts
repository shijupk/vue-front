export interface ISiteInfo {
    siteId: string;
    description: string;
    statusCode: number;
    notificationDateTime:string;
}


export interface ISites {
    Sites: ISiteInfo[];
}