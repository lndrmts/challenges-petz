import Link from "next/link";
import fetch from "node-fetch";
import React from "react";

import { Container, Article, LinkText } from "./styles";

import Header from "../../components/Header";

const Post = ({ post }) => {
  return (
    <>
      <Container>
        <Header />
        <Link href="/">
          <LinkText>Voltar</LinkText>
        </Link>
        <Article>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Article>
      </Container>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  // Pass data to the page via props
  return { props: { post } };
}

export default Post;
