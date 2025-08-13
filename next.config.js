const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

module.exports = withNextIntl({
  // Your Next.js config
});
