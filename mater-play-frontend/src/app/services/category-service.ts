
import { API } from '../@libs/axios';
import { ICategory, IMOVIE } from '../@libs/axios/typez';


const _ENDPOINT ='/categories';

const getAll = () => (API.get(_ENDPOINT)) 
const create = (category: ICategory) => (API.post(_ENDPOINT, category) ) 
const getById = (id:number) => (API.get(`${_ENDPOINT}/${id}`) ) 
const update = (id:number, category: ICategory) => (API.put(`${_ENDPOINT}/${id}`, category) ) 
const remove = (id:number) => (API.delete(`${_ENDPOINT}/${id}`) )




export const CategoryServices = {
    getAll,
    create,
    getById,
    update,
    remove
    
}

