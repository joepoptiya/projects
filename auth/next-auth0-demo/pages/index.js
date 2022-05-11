import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, loading } = useUser();

  console.log(user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth0 - Nextjs</title>
        <meta name="description" content="Nextjs and auth app using Auth0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Nextjs integration with Auth0</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div>
          <nav>
            {!user && (
              <>
                <Link href="/api/auth/login">
                  <a>Login</a>
                </Link>
              </>
            )}
            {user && (
              <>
                <img src={user.picture} alt={user.name} />
                <Link href="/api/auth/logout">
                  <a>Logout</a>
                </Link>
              </>
            )}
          </nav>
        </div>
        <div>
          <p>Content goes here</p>
        </div>
      </main>
    </div>
  );
}
