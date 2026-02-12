module.exports = {
  apps: [
    {
      // === ОСНОВНЫЕ НАСТРОЙКИ ПРИЛОЖЕНИЯ ===
      name: "svo_max",
      script: "./src/server.ts",
      cwd: "/var/www/svo-bot/svo-backend/",

      // === НАСТРОЙКИ МАСШТАБИРОВАНИЯ ===
      instances: 1,

      // === НАСТРОЙКИ ПЕРЕЗАПУСКА ===
      autorestart: true,
      watch: false,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,

      // === НАСТРОЙКИ ПАМЯТИ ===
      node_args: "--max-old-space-size=1024",
      max_memory_restart: "1024M",

      // === ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ ===
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

      // === НАСТРОЙКИ ЛОГИРОВАНИЯ ===
      error_file: "./logs/err.log",
    },
  ],
};
