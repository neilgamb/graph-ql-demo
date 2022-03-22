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

  console.log(data)

  return (
    <div>
      <ul id='book-list'>
        <li>Book name</li>
      </ul>
    </div>
  )
}

export default BookList
