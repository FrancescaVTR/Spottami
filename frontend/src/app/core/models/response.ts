export class ResponseData<T> {
    constructor(
        public status: number,
        public data: T,
        public date: Date,
        public error?: string
    ) { }
}