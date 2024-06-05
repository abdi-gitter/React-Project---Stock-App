import { Route, Routes } from 'react-router-dom'
import Brands from './pages/Brands'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Sales from './pages/Sales'
import Purchases from './pages/Purchases'
import Profile from './pages/Profile'
import Layout from './components/Layout/Layout'
import PrivateRouter from './PrivateRouter'
import { geocodeAddress } from './Geocode'
import Dashboard from './pages/Dashboard'
import Firms from './pages/Firms'

const App = () => {
  const getGeocode = async () => {
    const { lat, lng } = await geocodeAddress(
      '1775 Tysons Blvd 5th Floor, Tysons, VA 22102, United States'
    )
    console.log(lat, lng)
  }

  getGeocode()

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          <Route path="/stock" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="brands" element={<Brands />} />
            <Route path="firms" element={<Firms />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />} />
            <Route path="sales" element={<Sales />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
