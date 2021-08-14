import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import styles from "../styles/Repo.module.css";

const Repo: NextPage<any> = ({ repo }) => {
  return (
    <div className={styles.container}>
      <h1>{repo.name}</h1>
      <small>{repo.full_name}</small>
      <div>
        <h2>Languages</h2>
        <p>{repo.language}</p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const baseUrl = "https://api.github.com/users/proudynyu/repos";
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };

  const response = await fetch(baseUrl, { headers });
  const data = await response.json();

  const paths = data.map((repo: any) => {
    return {
      params: {
        name: repo.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, any> = async (ctx) => {
  const baseUrl = "https://api.github.com/repos/proudynyu/";
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };
  const { name } = ctx.params;

  const response = await fetch(baseUrl + name, { headers });
  const data = await response.json();
  return {
    props: {
      repo: data,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Repo;
