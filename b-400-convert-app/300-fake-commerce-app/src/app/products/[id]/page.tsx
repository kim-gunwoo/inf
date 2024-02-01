import ProductCard from '../../../components/ProductCard'
import ProductCounter from '../../../components/ProductCounter'

export default async function ProductDetail({ params }: { params: { id: string }}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${params.id}`
  )
  const product = await response.json()

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