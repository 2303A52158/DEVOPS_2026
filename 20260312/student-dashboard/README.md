# 🎓 Student Dashboard — Containerized React App

A frontend React application containerized with Docker and deployed via Continuous Deployment to a PaaS platform.

---

## 🏗️ Project Structure

```
student-dashboard/
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Styles
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── public/
│   └── index.html      # HTML template
├── .github/
│   └── workflows/
│       └── cd.yml      # GitHub Actions CD pipeline
├── Dockerfile          # Multi-stage Docker build
├── nginx.conf          # Nginx SPA config
├── .dockerignore
├── .gitignore
└── package.json
```

---

## 🐳 Docker Commands

### Build the image
```bash
docker build -t student-dashboard .
```

### Run locally
```bash
docker run -p 80:80 student-dashboard
# Open: http://localhost
```

### Tag for release
```bash
docker tag student-dashboard your-user/student-dashboard:v1.0-frontend
docker push your-user/student-dashboard:v1.0-frontend
```

### Roll back to previous image
```bash
docker pull your-user/student-dashboard:v1.0-frontend
docker run -p 80:80 your-user/student-dashboard:v1.0-frontend
```

---

## ⚙️ Continuous Deployment Setup

### GitHub Repository Secrets Required
| Secret | Description |
|---|---|
| `DOCKER_USERNAME` | Docker Hub username |
| `DOCKER_PASSWORD` | Docker Hub access token |
| `RENDER_DEPLOY_HOOK_URL` | Render.com deploy hook URL |
| `PAAS_APP_URL` | Your live app URL |

### CD Flow
1. Push to `main` branch
2. GitHub Actions builds & pushes Docker image
3. PaaS deployment webhook triggered automatically
4. Live app updated within ~2 minutes

---

## 🌐 PaaS Deployment (Render.com)

1. Go to [render.com](https://render.com) → New Web Service
2. Select **Deploy from Docker Hub**
3. Image: `your-user/student-dashboard:latest`
4. Port: `80`
5. Copy Deploy Hook URL → add as `RENDER_DEPLOY_HOOK_URL` secret

---

## 🔐 HTTPS

HTTPS is automatically enabled by Render.com (and most PaaS providers) via Let's Encrypt certificates — no extra configuration needed.

---

## 🏷️ Versioning

Current release tag: **v1.0-frontend**
