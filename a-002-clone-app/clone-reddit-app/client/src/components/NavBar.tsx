import { useAuthDispatch, useAuthState } from "@/context/auth";
import axios from "axios";
import Link from "next/link";

const NavBar: React.FC = () => {
  const { loading, authenticated } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    axios
      .post("/auth/logout")
      .then(() => {
        dispatch("LOGOUT");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 bg-white h-13">
      <span className="text-2xl font-semibold text-gray-400">
        <Link href="/">home</Link>
      </span>
      <div className="max-w-full px-4">
        <div className="relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white">
          <input
            className="px-3 py-1 bg-transparent rounded h-7 focus:outline-none"
            type="text"
            placeholder="Search Reddit"
          />
        </div>
      </div>
      <div className="flex">
        {!loading &&
          (authenticated ? (
            <button
              className="w-20 px-2 mr-2 text-sm text-center text-white bg-gray-400 rounded h-7"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          ) : (
            <>
              <Link
                className="w-20 px-2 pt-1 mr-2 text-sm text-center text-blue-500 border border-blue-500 rounded h-7"
                href="/login"
              >
                로그인
              </Link>
              <Link
                className="w-20 px-2 pt-1 text-sm text-center text-white bg-gray-400 rounded h-7"
                href="/register"
              >
                회원가입
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
