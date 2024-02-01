import Image from "next/image"

type Props = {
  title: string
  image: string
  description?: string
}

const ProductCard = (props: Props) => {
  return (
    <li className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure className="relative h-60">
        <Image
          src={props.image}
          alt={props.title}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        {props.description && <p>{props.description}</p>}
      </div>
    </li>
  )
}

export default ProductCard
