/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
     // Enable the use of the public directory or other local images
     unoptimized: true, // If you don't want Next.js to optimize images
   },
 };
 
 module.exports = nextConfig;
 