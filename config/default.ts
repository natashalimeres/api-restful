const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
export default {
  port: 3000,
  dbUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.no36x54.mongodb.net/`,
  env: "development",
};
