import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage<any> = ({ org, repos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.perfil}>
        <img
          className={styles.imgPerfil}
          src={org.avatar_url}
          alt="avatar"
          width="100"
          height="100"
        />
        <div>
          <h1>{org.login}</h1>
          <p>{org.location}</p>
          <span>
            Site: <a href={org.blog}>Linkedin</a>
          </span>
        </div>
      </div>
      <ul className={styles.repos}>
        {repos.map((repo: any) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = "https://api.github.com/users/";

  const user = "proudynyu";
  const userResponse = await fetch(baseUrl + user);
  const reposResponse = await fetch(baseUrl + user + "/repos");

  const userData = await userResponse.json();
  const userRepos = await reposResponse.json();

  return {
    props: {
      org: userData,
      repos: userRepos,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
