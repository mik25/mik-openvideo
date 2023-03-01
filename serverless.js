{
  "functions": {
    "api/index": {
      "memory": 128,
      "runtime": "nodejs14.x",
      "maxDuration": 10
    }
  },
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index.js"
    }
  ]
}


