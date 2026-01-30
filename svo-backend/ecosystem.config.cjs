module.exports = {
  apps: [
    {
      name: "svo_max",
      script: "./src/server.ts",
      cwd: "/var/www/svo-bot/svo-backend/",
      autorestart: true,
      restart_delay: 5000,
      env: {
        NODE_ENV: "development",
        PORT: 3001,
        BOT_TOKEN: "",
        DATABASE_URL: "mysql://user:password@localhost:3306/name",
        DATABASE_USER: "",
        DATABASE_PASSWORD: "",
        DATABASE_NAME: "",
        DATABASE_HOST: "localhost",
        DATABASE_PORT: 3306,
      },
    },
  ],
};
