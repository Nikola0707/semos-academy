const initialState = {
  albums: [
    {
      albumName: 'Master of puppets',
      artist: 'Metallcia',
      year: '1981',
      photo: null
    },
    {
      albumName: 'Frozen',
      artist: 'Madonna',
      year: '2000',
      photo: null
    },
    {
      albumName: 'Baby ',
      artist: 'Justin bieber',
      year: '2010',
      photo: null
    }
  ],

  filteredAlbums: [],
  searchBarText: ''
}

const insertNewAlbum = (newAlbumObject) => {
  return {
    type: 'INSERT_NEW_ALBUM',
    payload: newAlbumObject
  }
}

const removeAlbum = (index) => {
  return {
    type: 'REMOVE_ALBUM',
    payload: index
  }
}

const updateAlbum = (updatedAlbumObject) => {
  return {
    type: 'UPDATE_ALBUM',
    payload: updatedAlbumObject
  }
}

const searchAlbum = (searchBarText, criterium) => {
  return {
    type: 'SEARCH_ALBUM',
    payload: {
      searchBarText: searchBarText,
      criterium: criterium
    }
  }
}

const resetSearch = () => {
  return {
    type: 'RESET_SEARCH',
    payload: null
  }
}

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERT_NEW_ALBUM': {
      return {
        ...state,
        // na site albumi sto veke se vneseni, dodagi go i noviot album
        albums: [...state.albums, action.payload]
      }
    }

    case 'REMOVE_ALBUM': {
      const indexToRemove = action.payload // pozicijata na elementot vo nizata
      const newAlbumsArray = state.albums.filter(
        (a, i) => i !== indexToRemove
      )

      return {
        ...state,
        albums: newAlbumsArray
      }
    }

    case 'UPDATE_ALBUM': {
      const {
        rowId,
        albumName,
        year,
        photo,
        artist
      } = action.payload

      const updatedAlbum = {
        albumName,
        year,
        photo,
        artist
      }

      const newArray = state.albums.map((album, index) => {
        if (index === rowId) return updatedAlbum
        else return album
      })

      return {
        ...state,
        albums: newArray
      }
    }

    case 'SEARCH_ALBUM': {
      const searchBarText = action.payload.searchBarText
      const criterium = action.payload.criterium

      const newAlbumsArray = state.albums.filter(album => {
        // indexOf vrakja -1 ako ne go najde maliot vo golemiot string
        // ako go najde ja vrakja pozicijata na koja sto go nasol maliot string
        if (criterium === "Name") {
          if (album.albumName.toLowerCase()
            .indexOf(searchBarText.toLowerCase()) > -1) {
            return true
          } else {
            return false
          }
        } else if (criterium === "Year") {
          if (album.year.indexOf(searchBarText) > -1) {
            return true
          } else {
            return false
          }
        } else if(criterium === "Artist"){
          if(album.artist.toLowerCase().indexOf(searchBarText.toLowerCase()) > -1) {
            return true
          }else {
            return false
          }
        }
        return false
      })

      return {
        ...state,
        searchBarText,
        criterium,
        filteredAlbums: newAlbumsArray,
      }
    }

    case 'RESET_SEARCH': {
      return {
        ...state,
        filteredAlbums: [],
        searchBarText: ''
      }
    }

    default: {
      return state
    }
  }
}

export {
  insertNewAlbum,
  removeAlbum,
  updateAlbum,
  albumsReducer,
  searchAlbum,
  resetSearch
}