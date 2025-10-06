export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1>🚀 DevOps Project by Syed Mahmood Ali</h1>
      <p>This Next.js app is containerized with Docker, deployed using GitHub Actions, and running on Kubernetes!</p>
      <h2>📦 App Info</h2>
      <ul style={{ listStyle: "none" }}>
        <li>✅ Built with Next.js</li>
        <li>🐳 Containerized using Docker</li>
        <li>🤖 Automated CI/CD with GitHub Actions and Pushed image on GHCR</li>
        <li>☸️ Deployed on Kubernetes: Minikube</li>
      </ul>
    </div>
  );
}
