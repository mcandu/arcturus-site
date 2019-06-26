export interface Response<T> {
    meta: {
        total: number;
    };
    data: T[]
}