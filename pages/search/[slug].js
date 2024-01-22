import { useRouter } from "next/router";

export default function SearchSlug() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}