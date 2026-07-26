export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Post ${id} - My Blog`,
    description: `Read post number ${id} on My Blog.`,
  };
}

export default async function PostPage({ params }) {
  const  {id}  = await params;

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is the content of post {id}.</p>
    </div>
  );
}