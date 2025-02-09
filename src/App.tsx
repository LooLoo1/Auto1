import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from "pages"
import { MainLayout } from "layouts"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/cars/:id" element={<div>2</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

