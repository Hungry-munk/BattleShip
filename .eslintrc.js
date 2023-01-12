module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "always",
            },
        ],
    },
};
