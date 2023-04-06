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
  images: {
    domains: ['https://github.com/RYA234/ecshop_front_react'],
  },
}

module.exports = nextConfig