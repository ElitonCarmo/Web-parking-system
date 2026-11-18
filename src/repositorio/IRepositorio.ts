export interface IRepositorio {
    getRequest(service: string);
    postRequest(service: string, data: any);
}