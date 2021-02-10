import React, { useEffect } from 'react';
import { Container, Spinner, Card, ListGroup, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fetchArtists } from '../redux/artists/artists'

const Artists = () => {
  const dispatch = useDispatch()
  const { pending, error, data } = useSelector(state => state.artistsReducer)

  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch])


  if (pending) return <Spinner animation='border' />
  if (error) return <h1>{error}</h1>

  return (
    <Container>
      <Row>
        
          {
            data.map(artist => {
              return (
                <Col xs={12} md={4}>
                  <Card.Header>{artist.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <ListGroup.Item>UserName: {artist.username}</ListGroup.Item>
                      <ListGroup.Item>Email {artist.email}</ListGroup.Item>
                      <ListGroup.Item>Phone: {artist.phone}</ListGroup.Item>
                      <ListGroup.Item>Website: {artist.website}</ListGroup.Item>
                    </Card.Text>
                  </Card.Body>
                  </Col>
              )
            })

          }
        
      </Row>
    </Container >
  )
}

export default Artists