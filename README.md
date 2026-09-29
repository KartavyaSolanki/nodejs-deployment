# Simple GET API

A minimal Node.js project with one GET endpoint.

## Run

```
npm start
```

## Call the API

```
GET http://localhost:3000/api
```

Response:

```json
{ "message": "API called Successfully" }
```

## Docker

```
docker build -t simple-get-api .
docker run -p 3000:3000 simple-get-api
```

## Auto deployment

Every push to `main` (including merged pull requests) triggers
`.github/workflows/deploy.yml`, which:

1. Builds the Docker image from `Dockerfile`.
2. Pushes it to GitHub Container Registry as `ghcr.io/<owner>/<repo>:<commit-sha>` and `:latest`.
3. Calls the Render deploy hook so Render pulls the new image and restarts the service.

Required repository secret: `RENDER_DEPLOY_HOOK_URL`.
