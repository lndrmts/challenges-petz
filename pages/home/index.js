import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Post, Button } from "./styles";

import Header from "../../components/Header";
import Filter from "../../components/Filter";

function Home({ data }) {
  const [posts, setPosts] = useState(data);

  function handleChange(id) {
    api.get(`/posts/${id}`).then((response) => setPosts(response.data));
  }

  useEffect(() => {
    api
      .get(`/posts${filter === "all" ? "" : `?userId=${search}`}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  <>
    <Head>
      <title>Challenge Petz</title>
    </Head>
    <Container>
      <Header></Header>
      <Filter onChange={() => handleChange(post.id)} user={user} />
      {posts.map((post) => (
        <Post key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Button onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}>
            Vizualizar
          </Button>
          <Button onClick={() => handleRemovePost(post.id)}>Deletar</Button>
        </Post>
      ))}
    </Container>
  </>;
}

Home.getInitialProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  return { data: response.data };
};

export default Home;
