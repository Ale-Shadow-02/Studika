const isProd = process.argv.includes("--production");
const ivDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: this.isDev,
    htmlMin: {
        collapseWhitespace: isProd
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["woff", "svg"]
    }
}