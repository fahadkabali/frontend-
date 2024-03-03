module.exports = {
    // ... other configuration
    resolve: {
        fallback: {
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "crypto": require.resolve("crypto-browserify"),
            "http": require.resolve("stream-http"),
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "fs": false,
            "buffer": require.resolve("buffer/"),
            "events": require.resolve("events/")
        }
    }
};