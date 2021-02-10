import React, { useState } from 'react'
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchAlbum } from '../redux/albums/albums'

const SearchBar = () => {
  const [searchText, saveSearchText] = useState('')
  const [filterBy, setFilterBy] = useState('Choose Filter')

  const [isDisabled, setIsDisabled] = useState('disabled')

  const dispatch = useDispatch()

  const saveText = (event) => {
    const { value } = event.target
    saveSearchText(value)
    dispatch(searchAlbum(value, filterBy))
  }
  
  return (
    <InputGroup className="mb-3">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={filterBy}
        id="input-group-dropdown-1"
      >
        <Dropdown.Item onClick={
          () => {
            setFilterBy('Name')
            setIsDisabled('')
          }
        }>Name</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setFilterBy("Year")
            setIsDisabled('')
          }
        }>Year</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setFilterBy("Artist")
            setIsDisabled('')
          }
        }>Artist</Dropdown.Item>
        <Dropdown.Divider />

      </DropdownButton>
      <FormControl
        aria-describedby="basic-addon1"
        type='text'
        onChange={saveText}
        value={searchText}
        placeholder='Enter text for filtering'
        disabled={isDisabled}
      />

    </InputGroup>
  )
}

export default SearchBar