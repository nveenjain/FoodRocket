const env = process.env;
const config = {
  app: {
    "frontend-port": "3001",
    port: 3000,
    name: "sw project 30",
    domain: "swproject30.com",
  },
  database: {
    mongo: {
      host: env.MONGO_HOST,
    },
  },
  email: {
    host: env.MAIL_HOST,
    port: env.MAIL_PORT || 1025,
  },
  auth: {
    jwt: {
      secret: env.JWT_SECRET,
      session: {
        session: false,
        expiresIn: 1,
      },
    },
  },
};

module.exports = config;
