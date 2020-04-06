import axios from 'axios';
import { useFetch } from '../core/useFetch';


async function findById(id) {
    return await axios.get(`/api/categories/${id}`);
}
export function useCategory(id) {
    return useFetch(null, findById, id);
}


async function findCategoriesByType( id, type) {
    return await axios.get(`/api/categories/${id}/${type}`);
}
export function useCategoriesByType(id, type){
    return useFetch([], findCategoriesByType, id, type);
}


async function allCategories() {
    return await axios.get(`/api/categories`);
}
export function useAllCategories() {
    return useFetch([], allCategories);
}