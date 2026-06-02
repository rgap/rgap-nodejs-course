# 🧠 What Is Kubernetes?

**Kubernetes** (also called **K8s**) is an open-source system for automating the deployment, scaling, and management of containerized applications.

Originally designed by Google and now maintained by the Cloud Native Computing Foundation (CNCF), Kubernetes lets you:

- Run containers across multiple machines
- Manage their lifecycle (start, stop, update)
- Scale apps up or down
- Expose them to the internet securely

---

# Historical Context

## 🧱 1990s–2000s: Monolithic Apps and VMs

- Early web applications were deployed as **monoliths** on physical servers.
- Virtual Machines (e.g., **VMware**, **Xen**, **KVM**) emerged to run multiple OSes on one machine.
- VM-based deployment improved resource use but remained **heavyweight**:
  - Each VM = full OS + app + dependencies
  - Slow to boot, large in size (GBs), hard to scale

## 🐳 2013–2015: Docker

- Docker introduced in **March 2013** by DotCloud
- Built on **Linux containers (LXC)** and **cgroups**.
- Introduced:
  - Easy container packaging with `Dockerfile`
  - Docker Hub to share container images
  - Lightweight process isolation

## 🌐 Google’s Internal Tech: Borg and Omega

Before Kubernetes, Google ran **massive-scale workloads** using an internal system called **Borg**.

- Borg (2003+) managed thousands of workloads across data centers.
- Omega was its experimental successor with better scheduling and API clarity.

> These systems inspired Kubernetes directly.

## 🚀 2014–2015: Kubernetes

- Google open-sourced Kubernetes in **June 2014**.
- Kubernetes 1.0 released in **July 2015**, donated to the **Cloud Native Computing Foundation (CNCF)**.
