# 🧱 Kubernetes Core Concepts

This folder shows the **most basic building blocks of Kubernetes** using simple YAML files.

Each file demonstrates a concept you’ll use almost every time when working with Kubernetes.

---

## 📘 What Is Kubernetes?

Kubernetes is a system that helps run many containers across many machines.

- It watches your containers
- Restarts them if they fail
- Connects them to each other
- Gives them names and IPs
- Helps you update apps with no downtime

You don’t run containers manually — you describe what you want in a `.yaml` file, and Kubernetes makes it happen.

---

## 📁 What's in This Folder?

### 🟢 1. Pod (1_pod_minimal.yaml)

A **Pod** is the smallest thing you can run in Kubernetes.

- It usually has 1 container
- You can’t update or restart it automatically
- It’s like `docker run`, but inside Kubernetes

---

### 🚀 2. Deployment (2_deployment_minimal.yaml)

A **Deployment** is like a smarter Pod manager.

- Keeps Pods running even if they crash
- Lets you say “run 3 copies”
- Helps update your app without stopping it

You should use a Deployment instead of creating Pods manually.

---

### 🌐 3. Service (3_service_minimal.yaml)

A **Service** gives your Pods a stable IP and name.

- Pods get random IPs — Services fix that
- You can use it like a load balancer for your app
- Required for communication (e.g., frontend ↔ backend)

---

### ⚙️ 4. ConfigMap (4_configmap_minimal.yaml)

A **ConfigMap** stores settings for your app, like:

- Environment variables
- App modes (debug/production)

This keeps config **outside your code**, so you can change settings without changing the app.

---

### 🔐 5. Secret (5_secret_minimal.yaml)

A **Secret** is like a ConfigMap, but for private things:

- Passwords
- API keys
- Tokens

Secrets are base64 encoded and handled more securely by Kubernetes.

---

## ▶️ How to Use These Files

1. **Install Minikube** or any local Kubernetes environment.

   - [Minikube Installation Guide](https://minikube.sigs.k8s.io/docs/start/)
   - Or use Docker Desktop (Kubernetes tab enabled)

2. **Start your Kubernetes cluster** (if using Minikube):

```bash
minikube delete     # Optional: Reset cluster
minikube start
```

3. **Verify your cluster is running**:

```bash
kubectl cluster-info
```

You should see something like:  
"Kubernetes control plane is running at https://127.0.0.1:..."

> ⚠️ If you visit that URL in your browser and see a 403 error, that’s normal — the API is protected.

---

4. **Apply the YAML files one by one:**

```bash
kubectl apply -f 2_pod_minimal.yaml
kubectl get pods
```

You should see something like:

```
NAME     READY   STATUS    RESTARTS   AGE
my-pod   1/1     Running   0          10s
```

---

5. **Check what the pod is doing (logs and shell access):**

To see what the container prints:

```bash
kubectl logs my-pod
```

To open a shell inside the pod:

```bash
kubectl exec -it my-pod -- sh
```

Then run commands like `ls`, `env`, or `ps`. Type `exit` to leave.

---

6. **Delete the resources when you're done:**

```bash
kubectl delete -f 2_pod_minimal.yaml
```

---

❗ If you see `connection refused` or port 8080 errors, it means the cluster is not running.

---

## 🧠 Summary

| Concept    | What It Is                        | Why It Matters                  |
| ---------- | --------------------------------- | ------------------------------- |
| Pod        | Runs a container                  | The core building block         |
| Deployment | Manages pods                      | Adds auto-restart and scaling   |
| Service    | Gives a pod a fixed name and port | Enables communication           |
| ConfigMap  | Stores config data                | Keeps config separate from code |
| Secret     | Stores sensitive data             | Secures private values (base64) |
