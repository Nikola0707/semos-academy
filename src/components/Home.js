import React from 'react'
// import Counter from '../Counter'

import { useSelector } from 'react-redux'

const Home = () => {
  const {username, password} =  useSelector((store) => store.loginReducer ) // this state is comming from login redux login

  return <h1> Welcome {username} to our music store! {/* <Counter /> */}</h1>
}

export default Home