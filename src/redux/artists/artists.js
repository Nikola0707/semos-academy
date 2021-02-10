const initialState = {
    pending: false,
    error: null,
    data: []
}

// Pending API request action
const apiUrl = 'https://jsonplaceholder.typicode.com/users'

const fetchArtists = () => {
    return function (dispatch) {
        dispatch(fetchArtistsPending())

        fetch(apiUrl)
            .then(res => res.json())
            .then(response => {
                if (!response || !response.length) {
                    dispatch(fetchArtistsError('Resource not found'))
                } else {
                    dispatch(fetchArtistsSuccess(response))
                }
            })
            .catch(error => {
                dispatch(fetchArtistsError(error.message))
            })
    }
}

// Actions
const fetchArtistsPending = () => {
    return {
        type: 'FETCH_ARTISTS_PENDING',
        payload: null
    }
}

const fetchArtistsSuccess = (response) => {
    return {
        type: 'FETCH_ARTISTS_SUCCESS',
        payload: { response }
    }
}

const fetchArtistsError = (error) => {
    return {
        type: 'FETCH_ARTISTS_ERROR',
        payload: { error }
    }
}

// Reducer

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ARTISTS_PENDING': {
            return {
                ...state,
                pending: true
            }
        }
        case 'FETCH_ARTISTS_SUCCESS': {
            return {
                ...state,
                pending: false,
                error: null,
                data: action.payload.response
            }
        }
        case 'FETCH_ARTISTS_ERROR': {
            return {
                ...state,
                pending: false,
                error: action.payload.error,
                data: []
            }
        }
        default: {
            return state
        }
    }
}

export {
    fetchArtists,
    artistsReducer
}

























