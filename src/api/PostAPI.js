import axios from 'axios';
import { useFetch } from '../core/useFetch';

async function findArticleById(id) {
    return await axios.get(`/api/posts/${id}`);
}
export function useSingleArticle(id) {
    return useFetch(null, findArticleById, id);
}


async function queryPosts(pageIndex, pageSize) {
    return await axios.get(`/api/posts/latest?pageIndex=${pageIndex}&pageSize=${pageSize}`);
}
export function useLatest(pageIndex, pageSize) {
    return useFetch([], queryPosts, pageIndex, pageSize);
}