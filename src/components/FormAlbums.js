import React, { useState } from 'react';

import { useDispatch } from 'react-redux'

import { Form, Button, Container } from 'react-bootstrap';

import { addNewAlbum } from '../redux/albums/albums'

const FormAlbums = ({ handleClick }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [year, setYear] = useState('');
    const [artist, setArtist] = useState('');

    const saveAlbumToStore = (e) => {
        e.preventDefault();
        dispatch(addNewAlbum(name, image, year, artist))

        // Reset all fields
        setName("")
        setImage("")
        setYear("")
        setArtist("")
    }

    // Fuction for uploading and reading image
    const imageHandler = (e) => {
        const reader = new FileReader();
        console.log(reader)
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    // Save the data from all imput fields to local state
    const saveData = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value)

        } else if (name === 'year') {
            setYear(value)
        } else if (name === 'artist') {
            setArtist(value)
        } else if (name === 'image') {
            setImage(value)
        }
    }

    return (

        <Container>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Album name"
                        name='name'
                        value={name}
                        onChange={saveData}
                    />
                </Form.Group>

                <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Year"
                        name='year'
                        value={year}
                        onChange={saveData}
                    />
                </Form.Group>

                <Form.Group controlId="artist">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Artist"
                        name='artist'
                        value={artist}
                        onChange={saveData}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.File
                        type="file"
                        accept="image/*"
                        name="image"
                        id="input"
                        onChange={imageHandler}
                        style={{
                            margin: "10px 0"
                        }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={saveAlbumToStore} style={{
                            marginRight: "10px"
                        }}>
                    Add album
                </Button>
                <Button variant="danger" type="submit" onClick={handleClick}>
                    Close
            </Button>
            </Form>
        </Container>
    )
}

export default FormAlbums