import { useEffect, useReducer, useRef } from "react"
import deepEqual from 'dequal'


const INIT = 'INIT';
const RUNNING = 'RUNNING';
const DONE = 'DONE';
const ERROR = 'ERROR';

const dataFetchReducer = (prevState, action) => {
    let nextState = prevState;
    switch (action.type) {
        case 'FETCH_START':
            nextState = { ...prevState, status: RUNNING };
            break;
        case 'FETCH_SUCCESS':
            nextState = { ...prevState, status: DONE, data: action.payload };
            break;
        case 'FETCH_FAILURE':
            nextState = { ...prevState, status: ERROR, data: action.payload };
            break;
        default:
            nextState = prevState;
            break;
    }
    if (process.env.NODE_ENV === 'development') {
        console.info('Prev :%o\nAction :%o\nNext :%o', prevState, action, nextState);
    }

    return nextState;
}

// https://github.com/kentcdodds/use-deep-compare-effect
function useDeepCompareMemoize(value) {
    const ref = useRef();
    if (!deepEqual(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
}
export function useFetch(initialData, api, ...args) {

    const [state, dispatch] = useReducer(dataFetchReducer, {
        status: INIT,
        data: initialData
    })

    useEffect(() => {
        let didCancel = false
        const fetchData = async () => {
            dispatch({ type: 'FETCH_START', args })
            try {
                const response = await api(...args);
                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE', payload: error.response })
                }
            }

        }

        fetchData()
        return () => { didCancel = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, useDeepCompareMemoize([api, args]));

    return state;
}
