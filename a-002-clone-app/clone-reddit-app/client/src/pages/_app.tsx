import NavBar from "@/components/Navbar";
import { AuthProvider } from "@/context/auth";
import "@/styles/globals.css";
import axios, { AxiosError } from "axios";
import Axios from "axios";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;

  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data;
      }
      throw error;
    }
  };

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <AuthProvider>
        {!authRoute && <NavBar />}
        <div className={authRoute ? "" : "pt-12 bg-gray-200 min-h-screen"}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </SWRConfig>
  );
}
