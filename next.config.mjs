/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // add to resolve SyntaxError: Unexpected token '/', "/Users/anj"... is not valid JSON at JSON.parse (<anonymous>) at Array.map (<anonymous>)
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    }
};

export default nextConfig;
