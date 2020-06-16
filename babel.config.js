module.exports = {
    "presets": [
        ["@babel/env", {"modules": false}]
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/proposal-class-properties", {"loose": true}]
    ]
};