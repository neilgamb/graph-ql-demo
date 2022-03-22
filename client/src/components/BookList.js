import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery)

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
