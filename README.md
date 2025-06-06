# Chat App – MVP

This is a minimal chat application built with **Next.js** (Frontend), **Express** (Backend), and **PostgreSQL** (Database). The entire app is containerized and runs with **Docker Compose**.

---

## 🚀 Quick Start

### 📦 Prerequisites

- Docker & Docker Compose installed
- Ports `3000`, `5000`, and `5432` available on your machine

---

### ⚙️ How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-user/chat-app.git
cd chat-app/docker
docker compose up --build
'''

This will:

    Start the PostgreSQL database on port 5432

    Launch the backend server on port 5000

    Start the frontend (Next.js) on http://localhost:3000
