# Chat App – MVP

This is a minimal chat application built with **Next.js** (Frontend), **Express** (Backend), and **PostgreSQL** (Database). The entire app is containerized and runs with **Docker Compose**.

---

## 🚀 Quick Start

### 📦 Prerequisites

- Docker & Docker Compose installed
- Ports `3000`, `5000`, and `5432` available on your machine

---

### ⚙️ How to Run

1. ***Clone the repository:***

```bash
git clone https://github.com/mgalinski10/chat-app.git
```
2. ***Navigate to the Docker setup directory:***

```bash
cd chat-app/docker
```
3. ***Start all services using Docker Compose:***
```bash 
docker compose up --build
```

This will:

- Start the PostgreSQL database on port **5432**
- Launch the backend server on port **5000**
- Start the frontend (Next.js) on [http://localhost:3000](http://localhost:3000)
