/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! 警告 !!
    // あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
    // !! 警告 !!
    ignoreBuildErrors: true
  }, 
  webpack: (config, { webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\.stor(ies|y).[tj]sx$/));
    return config;
  },
}



module.exports = nextConfig
