import { useRouter } from "next/router";
import useSWR from "swr";

const UserPage = () => {
  const router = useRouter();
  const username = router.query.username;
  const { data, error } = useSWR(username ? `/users/${username}` : null);

  if (!data) return null;

  return <div>user page</div>;
};

export default UserPage;
