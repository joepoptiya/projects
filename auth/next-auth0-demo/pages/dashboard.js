import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Dashboard(props) {
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
