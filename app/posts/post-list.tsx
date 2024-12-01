import Link from "next/link";

export default function PostList(props) {
  return (
    <>
      <h1>Posts</h1>
      <div>
        {props.data.workConnection.edges.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              {post.node._sys.filename}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
