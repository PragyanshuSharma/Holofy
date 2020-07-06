module.exports = {
    apps: [{
        script: "npm",
        args: "start",
        env_development: {
            "name": "elasticsearchDemo_api_3000_dev",
            "NODE_ENV": "development"
        }
    }]
}