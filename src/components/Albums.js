import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import AddNewAlbum from './AddNewAlbum.js'
import { removeAlbum } from '../redux/albums/albums'
import EditAlbum from './EditAlbum.js'
import SearchBar from './SearchBar.js'

const Albums = () => {
  const [isModalShown, showModal] = useState(false)
  const [editModalShown, showEditModal] = useState(false)
  const [rowId, rowClicked] = useState(null)

  const {
    albums,
    filteredAlbums,
    searchBarText
  } = useSelector(state => state.albumsReducer)

  const renderAlbums = searchBarText !== '' ? filteredAlbums : albums

  const dispatch = useDispatch()

  const toggleModal = () => {
    showModal(!isModalShown)
  }

  const toggleEditModal = (index) => {
    rowClicked(index)
    showEditModal(!editModalShown)
  }

  const deleteAlbum = (index) => {
    dispatch(removeAlbum(index))
  }

  return (<div style={{ padding: '5% 20%' }}>

    <SearchBar />

    <Button onClick={toggleModal}>
      Add new album
    </Button>

    {isModalShown &&
      <AddNewAlbum show={isModalShown} handleClose={toggleModal} />
    }

    {editModalShown &&
      <EditAlbum
        rowId={rowId}
        album={albums[rowId]}
        show={editModalShown}
        handleClose={toggleEditModal}
      />
    }

    <Table striped bordered hover style={{ marginTop: '1rem' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Artist</th>
          <th>Cover Photo</th>
        </tr>
      </thead>
      <tbody>
        {/* ovde se prikazuvaat albumite, sekoj vo poseban redica */}
        {renderAlbums.map((album, index) => {
          return <tr key={index}>
            <td>{album.albumName}</td>
            <td>{album.year}</td>
            <td>{album.artist}</td>
            <td>{album.photo}</td>
            <td>
              <Button variant='secondary'
                onClick={() => toggleEditModal(index)}>
                Edit
              </Button>
              <Button
                variant='danger'
                onClick={() => deleteAlbum(index)}
              >
                Delete
              </Button>
            </td>
          </tr>
        })}
      </tbody>
    </Table>
  </div>
  )
}

export default Albums