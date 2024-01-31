import Link from "next/link"

const NavigationBar = () => {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="flex-1 px-2 mx-2">쇼핑</div>
      <ul className="menu menu-horizontal">
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/products">상품 목록</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar
