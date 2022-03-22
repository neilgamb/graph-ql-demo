import { useQuery, gql } from '@apollo/client'

const BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`
function BookList() {
  const { loading, error, data } = useQuery(BOOKS)

  const renderBooks = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data.books.map((book) => <li key={book.id}>{book.name}</li>)
  }

  return (
    <div>
      <ul id='book-list'>{renderBooks()}</ul>
    </div>
  )
}

export default BookList
