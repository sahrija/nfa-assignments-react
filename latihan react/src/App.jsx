import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Books from './features/books/pages/Books'
import BookDetail from './features/books/pages/BookDetail'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
