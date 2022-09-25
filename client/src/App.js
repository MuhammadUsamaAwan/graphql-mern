import { Routes, Route } from 'react-router-dom'
import Posts from './Posts'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
    </Routes>
  )
}

export default App
