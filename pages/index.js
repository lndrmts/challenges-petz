import React, { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

import api from "../api";

import { Container, Post, Button, ButtonRemove } from "./styles";

import Header from "../components/Header";
import Filter from "../components/Filter";

function Home({ data }) {
  const [posts, setPosts] = useState(data);
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState([]);

  function handleChange(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    api
      .get(`/posts${filter === "all" ? "" : `?userId=${filter}`}`)
      .then((response) => {
        setPosts(response.data);
      });
  }, [filter, posts]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  function handleRemovePost(id) {
    api.delete(`/posts/${id}`).then((response) => {
      console.log(response);
    });
  }
  return (
    <>
      <Head>
        <title>Challenge Petz</title>
      </Head>
      <Container>
        <Header></Header>
        <Filter handleChange={handleChange} users={users} />
        {posts.map((post) => (
          <Post key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button
              onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}
            >
              Vizualizar
            </Button>
            <ButtonRemove onClick={() => handleRemovePost(post.id)}>
              Deletar
            </ButtonRemove>
          </Post>
        ))}
      </Container>
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await api.get(`/posts`);

  return { data: response.data };
};

export default Home;
