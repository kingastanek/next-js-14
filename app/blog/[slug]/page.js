export default function BlogPostPage({ params }) {
  const { slug } = params;
  return (
    <main>
      <h1>{slug}</h1>
    </main>
  );
}
