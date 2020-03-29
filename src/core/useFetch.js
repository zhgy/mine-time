import { useEffect, useState, useReducer } from "react"
import axios from 'axios'



const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            throw new Error()
    }
}

function useFetch(initialRequest, initialData) {

    // See https://www.robinwieruch.de/react-hooks-fetch-data
    const [request, setRequest] = useState(initialRequest)
    const doFetch = (request) => {
        setRequest(request)
    }

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData
    })

    useEffect(() => {
        if (request.method === 'POST' && !request.data)
            return

        let didCancel = false
        const fetchData = async () => {
            dispatch({ type: 'FETCH_START' })
            try {
                console.log(request);
                const response = await axios.request(request)
                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' })
                }
            }

        }

        fetchData()
        return () => { didCancel = true }
    }, [request])

    console.log(state)
    return [state, doFetch]
}

function useQuery(url, initialData) {
    const [state, doFetch] = useFetch({ method: 'GET', url }, initialData)
    return [state, (query) => doFetch({method: 'GET', url: query})];
}

function usePost(initialData) {
    const [state, doFetch] = useFetch({ method: 'POST' }, initialData)
    return [state, (url, data) => doFetch({ method: 'POST', url, data })]
}

function usePut(initialData) {
    const [state, doFetch] = useFetch({ method: 'PUT' }, initialData)
    return [state, (url, data) => doFetch({ method: 'PUT', url, data })]
}


export {
    useFetch,
    useQuery,
    usePost,
    usePut
}
export default useFetch