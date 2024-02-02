import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        <Link href="/meals">Meals Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Page</Link>
      </p>
      <p>
        <Link href="/community">Community Page</Link>
      </p>
    </main>
  );
}
