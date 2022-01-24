import AuthCheck from "../../components/AuthCheck";

export default function AdminPostsPage({}) {
  return (
    <main>
      <AuthCheck>
        <h1>Admin All Posts Page</h1>
      </AuthCheck>
    </main>
  );
}
