const albumsReducer = (
    state = {
        albums:[]    
    },
    action
) => {
    switch (action.type){
        case 'ADD_NEW_ALBUM':{
            return{
                ...state,
                albums: [...state.albums, action.payload]
            }
        }
        default: return state
    }
}

const addNewAlbum = (name, image, year, artist) => {
    return {
        type: 'ADD_NEW_ALBUM',
        payload: {name, image, year, artist}
    }
}

export {
    albumsReducer,
    addNewAlbum,
}