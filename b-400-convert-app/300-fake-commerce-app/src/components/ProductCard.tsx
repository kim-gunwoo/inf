type Props = {
  title: string
  image: string
  description?: string
}

const ProductCard = (props: Props) => {
  return (
    <li className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure className="relative h-60">
        <img
          src={props.image}
          alt={props.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
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
