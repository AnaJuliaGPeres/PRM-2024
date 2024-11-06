
import { API } from '../@libs/axios';
import { IMOVIE } from '../@libs/axios/typez';

const _ENDPOINT ='/movies';



const getMovies = async (): Promise<IMOVIE[]> => {
    const { data} = await API.get(_ENDPOINT)
    return data;}



const getMoviesByID = async (id: string): Promise<IMOVIE> => {
    const { data} = await API.get(`${_ENDPOINT}/${id}`)         
    return data;}

const getByCategoryId = async (id: number): Promise<IMOVIE[]> => {
        const { data} = await API.get(`${_ENDPOINT}?categoryId=${id}`)         
        return data;}

export const moviesService = {
    getMovies,
    getMoviesByID,
    getByCategoryId
}


