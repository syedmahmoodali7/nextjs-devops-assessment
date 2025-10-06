# 🚀 DevOps Project - Next.js App Deployment

This is a **Next.js** application containerized with **Docker**, automated via **GitHub Actions**, and deployed on **Kubernetes (Minikube)**.

---

## 📦 App Overview

This project demonstrates a complete DevOps workflow:

- ✅ Built with **Next.js**
- 🐳 Containerized using **Docker**
- 🤖 Automated CI/CD with **GitHub Actions** and pushed image to **GitHub Container Registry (GHCR)**
- ☸️ Deployed on **Kubernetes (Minikube)**

---

## 🛠️ Prerequisites

Before you begin, make sure you have:

- Node.js (v20+)
- npm
- Docker
- Minikube
- kubectl
- GitHub account with a **public repository**
- GitHub Actions enabled for the repository

---

## 💻 Local Setup

Clone the repository:

```bash
git clone https://github.com/syedmahmoodali7/nextjs-app.git
cd nextjs-app
```

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

The app will run at: `http://localhost:3000`

---

## 🐳 Docker Setup

Build Docker image:

```bash
docker build -t nextjs-app .
```

Run Docker container:

```bash
docker run -p 3000:3000 nextjs-app
```

The app will run at: `http://localhost:3000`

---

## 🤖 GitHub Actions CI/CD

The workflow automatically:

1. Builds the Docker image on push to `main` branch  
2. Logs in to **GitHub Container Registry (GHCR)**  
3. Pushes the Docker image with proper tagging  

Workflow file: `.github/workflows/main.yml`  

Docker image URL:  
`ghcr.io/syedmahmoodali7/nextjs-app:latest`

---

## ☸️ Kubernetes Deployment (Minikube)

Start Minikube:

```bash
minikube start
```

Apply Kubernetes manifests:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Check pods and service:

```bash
kubectl get pods
kubectl get svc
```

Access the application:

```bash
minikube service nextjs-service
```

---

## 📝 Folder Structure

```
my-next-app/
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── .github/workflows/
│   └── main.yml
├── Dockerfile
├── package.json
├── pages/
│   └── index.js
└── README.md
```

---

## ✅ Author

**Syed Mahmood Ali**  

This project demonstrates containerization, CI/CD automation, and Kubernetes deployment using a simple Next.js application.
