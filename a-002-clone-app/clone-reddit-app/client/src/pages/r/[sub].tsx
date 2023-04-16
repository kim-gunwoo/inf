import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";

const SubPage = () => {
  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url).then((res) => res.data);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data;
      }
      throw error;
    }
  };
  const router = useRouter();
  const subName = router.query.sub;

  const {
    data: sub,
    error,
    mutate,
  } = useSWR(subName ? `/subs/${subName}` : null, fetcher);

  return <div>subpage</div>;
};

export default SubPage;
