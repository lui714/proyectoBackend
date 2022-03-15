enum enumStatus {
    PUBLISH,
    UNPUBLISH
}

export interface IZapato {
    _id?: any;
    id: string;
    marca: string;
    modelo: string;
    publishedDate?: string;
    thumbnailUrl?: string;
    precio: string;
    longDescription?: string;
    status: enumStatus;
    tallas: Array<string>;
    idm: string;
}