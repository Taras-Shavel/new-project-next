import { INewData } from "../interfaces/newData.interface";
import { IRes } from "../types/axiosRes.type";
import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const dataService = {
    getAll: (page: number, limit: number): IRes<INewData[]> => axiosService.get(urls.getAll(page, limit))
}

export {
    dataService
}