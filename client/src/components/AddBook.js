import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries'

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery)
  const [addBook] = useMutation(addBookMutation)

  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')

  const renderAuthors = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ))
  }

  const submitForm = (e) => {
    e.preventDefault()
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    })
    setName('')
    setGenre('')
    setAuthorId('')
  }

  return (
    <form id='add-book' onSubmit={submitForm}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {renderAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook
