import ReactDOM from 'react-dom'
import useFetch from './useFetch'

const Home = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <>
      {data &&
        data.map(item => {
          return <p key={item.id}>{item.title}</p>
        })}
    </>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
