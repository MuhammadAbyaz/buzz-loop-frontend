export async function getPosts() {
  const response = await (await fetch("http://localhost:5000/posts")).json();
  return response;
}
