import React, { useState } from 'react'

import { Container, Table, Button } from 'react-bootstrap';


import FormAlbums from './FormAlbums';

import { useSelector } from 'react-redux'


const Albums = () => {

  // Depends of this boolean, show or hide the form
  const [isTrue, setIsTrue] = useState(false)

  // Album state and state length
  const albumsState = useSelector((store) => store.albumsReducer.albums)
  const albumsLength = albumsState.length



  // Create album items in a table
  const createAlbums = () => {
    return (
      albumsState.map((albumsState) => {
        const { name, year, image, artist } = albumsState
        return (
          <tbody>
            <tr>
              <td>{name.toUpperCase()}</td>
              <td style={{maxWidth: "50px"}}><img src={image} alt="albumImage" id="img" style={{
                width: "100%",
                height: "50px"
              }}/></td>
              <td>{year.toUpperCase()}</td>
              <td>{artist.toUpperCase()}</td>
            </tr>
          </tbody>
        )
      })
    )
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsTrue(!isTrue);
  }

  return (
    <>
      {
        isTrue ? <FormAlbums handleClick={handleClick} /> : <Container >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th colSpan="5">
                  <Button variant="primary" onClick={handleClick}>Add new Album</Button>
                </th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Year</th>
                <th>Artist</th>
              </tr>
            </thead>

            {
              albumsLength > 0 ? createAlbums() : <h3 style={{color: 'black'}}>Please click <b>Add new Album</b> and fill the form with all informations.</h3>

            }
          </Table>
        </Container>
      }

    </>
  )
}

export default Albums
