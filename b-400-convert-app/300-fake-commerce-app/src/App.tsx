import { useEffect, useState } from 'react'
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom'
import { Product } from './types'
import ProductCard from './components/ProductCard'
import NavigationBar from './components/NavigationBar'
import ProductCounter from './components/ProductCounter'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className="drawer-content flex flex-col">
      <NavigationBar />
      <Outlet />
    </div>
  )
}

function Home() {
  return <h1>Home</h1>
}

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/products`
      )
      const data = await response.json()
      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2 className="text-center">상품 목록</h2>
      <ul className="grid grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <Link to={`/products/${product.id}`}>
            <ProductCard title={product.title} image={product.image} />
          </Link>
        ))}
      </ul>
    </div>
  )
}

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/products/${id}`
      )
      const data = await response.json()
      setProduct(data)
    }

    fetchData()
  }, [id])

  return (
    <div>
      <h2 className="text-center">상품 상세</h2>
      {product && (
        <ProductCard
          title={product.title}
          image={product.image}
          description={product.description}
        />
      )}
      {product && <ProductCounter />}
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2 className="text-center">길을 잃었다~ 어딜 가야 할까~</h2>
      <p>
        <Link to="/">홈으로 이동</Link>
      </p>
    </div>
  )
}
