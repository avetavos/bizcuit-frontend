/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: false,
  env: {
    API_HOST: process.env.API_HOST,
  },
}

module.exports = nextConfig
