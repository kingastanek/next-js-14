import Link from "next/link";

export default function Meal({ params }) {
  return (
    <main>
      <h1>Meal Page {params.mealId}</h1>
      <p>
        <Link href="/">Return Home</Link>
      </p>
    </main>
  );
}
