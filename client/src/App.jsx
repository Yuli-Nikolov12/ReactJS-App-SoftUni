import { Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Header from './components/Header'
import NotFoundPage from "./components/NotFoundPage";

export default function App() {

  return (
    <div className="bg-black">
        <Header />
        
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
  )
}