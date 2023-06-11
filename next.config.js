/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
    env: {
        API_URL_BACKEND: process.env.API_URL_BACKEND,
    }
}

module.exports = nextConfig
