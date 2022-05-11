import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function ProtectedRoute(req, res) {
  const session = getSession(req, res);
  const user = session.user;
  res.status(200).json({ protected: "My secret message", id: user.sub });
});

withApiAuthRequired;
