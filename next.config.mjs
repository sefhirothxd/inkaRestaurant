/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dsnyk1xc1sxw4.cloudfront.net',
			},
			{
				protocol: 'https',
				hostname: 'tailwindflex.com',
			},
		],
	},
};

export default nextConfig;
