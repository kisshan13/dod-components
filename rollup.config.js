const typescript = require("@rollup/plugin-typescript")

module.exports = {
    input: 'src/index.ts', // Replace with your entry file
    output: {
        file: 'dist/index.js', // Replace with your desired output file and directory
        format: 'umd',
        name: 'ui-library',
    },
    plugins: [
        typescript(),
    ],
};