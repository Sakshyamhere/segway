import { useRouter } from "next/router";

export default function ProductSlug() {
  const router = useRouter();
  return <p>Post: {router.query.id}</p>;
}