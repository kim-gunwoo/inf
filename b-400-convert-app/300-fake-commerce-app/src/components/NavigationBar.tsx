import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="flex-1 px-2 mx-2">쇼핑</div>
      <ul className="menu menu-horizontal">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">상품 목록</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar
