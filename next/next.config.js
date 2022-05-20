/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
  };

  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./styles"],
      prependData: `@import "variables.scss";
                    @import "mixins.scss";`,
    };
  }

  return {
    nextConfig,
    defaultConfig,
  };
};
