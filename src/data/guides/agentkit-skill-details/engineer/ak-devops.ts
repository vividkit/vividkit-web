import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: "/ak:devops [platform] [task]",
  arguments: [
    {
      token: "[platform]",
      titleEn: "Platform",
      titleVi: "Nền tảng",
      descEn: "Infrastructure surface to work on, such as Cloudflare, Docker, Google Cloud, Kubernetes, Helm, CI/CD, or GitOps. This selects the operational context; it does not choose a default environment or grant deployment approval.",
      descVi: "Bề mặt hạ tầng cần xử lý, như Cloudflare, Docker, Google Cloud, Kubernetes, Helm, CI/CD hoặc GitOps. Đối số này chọn bối cảnh vận hành; nó không chọn môi trường mặc định hay cấp quyền deploy.",
      exampleCommand: "/ak:devops cloudflare \"review this Worker staging config\"",
    },
    {
      token: "[task]",
      titleEn: "Task",
      titleVi: "Tác vụ",
      descEn: "Operational request to design, review, implement, troubleshoot, build, deploy, audit, or prepare rollback steps. Include the account, project, region, environment, resource, allowed effect, and validation boundary when known.",
      descVi: "Yêu cầu vận hành để thiết kế, rà soát, triển khai, xử lý sự cố, build, deploy, audit hoặc chuẩn bị rollback. Nêu account, project, region, environment, resource, tác động được phép và ranh giới xác minh khi đã biết.",
      exampleCommand: "/ak:devops kubernetes \"review manifests for RBAC, resources, rollout checks, and rollback commands\"",
    },
  ],
};

const data: SkillInfographic = {
  id: "ak-devops",
  command: "/ak:devops",
  kit: "engineer",
  header: {
    titleEn: "/ak:devops — Deploy and operate infrastructure",
    titleVi: "/ak:devops — Triển khai và vận hành hạ tầng",
    taglineEn: "Deploy and manage infrastructure across Cloudflare, Docker, Google Cloud, Kubernetes, CI/CD, GitOps, and security audits.",
    taglineVi: "Triển khai và vận hành hạ tầng trên Cloudflare, Docker, Google Cloud, Kubernetes, CI/CD, GitOps và rà soát bảo mật.",
  },
  processFlow: [
    { number: 1, titleEn: "Classify Platform", titleVi: "Chọn nền tảng", descEn: "Map the request to Cloudflare Workers/Pages/R2/D1, Docker, GCP Cloud Run/GKE/Cloud SQL, Kubernetes, Helm, or GitOps.", descVi: "Gắn yêu cầu với Cloudflare Workers/Pages/R2/D1, Docker, GCP Cloud Run/GKE/Cloud SQL, Kubernetes, Helm hoặc GitOps." },
    { number: 2, titleEn: "Select Fit", titleVi: "Chọn hướng phù hợp", descEn: "Use the platform table: edge latency to Workers, large egress to R2, containers to Docker plus Cloud Run/GKE, enterprise clusters to GKE.", descVi: "Dùng bảng chọn nền tảng: độ trễ biên dùng Workers, egress lớn dùng R2, container dùng Docker với Cloud Run/GKE, cụm doanh nghiệp dùng GKE." },
    { number: 3, titleEn: "Load Reference", titleVi: "Mở tài liệu nền", descEn: "Navigate to the relevant reference guide for Cloudflare, Docker, GCP, Kubernetes, Helm, scripts, or upstream docs before acting.", descVi: "Mở đúng tài liệu tham chiếu cho Cloudflare, Docker, GCP, Kubernetes, Helm, scripts hoặc docs upstream trước khi làm." },
    { number: 4, titleEn: "Prepare Commands", titleVi: "Chuẩn bị lệnh", descEn: "Choose concrete wrangler, docker, gcloud, kubectl, or helm commands and keep configuration as version-controlled infrastructure where possible.", descVi: "Chọn lệnh wrangler, docker, gcloud, kubectl hoặc helm cụ thể và ưu tiên lưu cấu hình như hạ tầng có version control." },
    { number: 5, titleEn: "Secure Defaults", titleVi: "Mặc định an toàn", descEn: "Apply non-root containers, RBAC, secret handling, image scanning, network policies, and least-privilege environment access.", descVi: "Áp dụng container không chạy root, RBAC, quản lý secret, quét image, network policy và quyền môi trường tối thiểu." },
    { number: 6, titleEn: "Optimize Runtime", titleVi: "Tối ưu vận hành", descEn: "Tune multi-stage builds, edge caching, resource limits, right-sized services, and cost-aware storage choices.", descVi: "Tối ưu multi-stage build, cache ở edge, giới hạn tài nguyên, sizing dịch vụ và lựa chọn lưu trữ theo chi phí." },
    { number: 7, titleEn: "Deploy or Audit", titleVi: "Triển khai hoặc rà soát", descEn: "Run the chosen deployment, CI/CD, GitOps, or audit workflow and capture the observable platform result.", descVi: "Chạy workflow triển khai, CI/CD, GitOps hoặc audit đã chọn và ghi nhận kết quả quan sát được trên nền tảng." },
    { number: 8, titleEn: "Report Operations", titleVi: "Báo cáo vận hành", descEn: "Summarize platform, commands, resources touched, security posture, performance or cost trade-offs, and next operational checks.", descVi: "Tóm tắt nền tảng, lệnh đã chạy, tài nguyên đã chạm, trạng thái bảo mật, đánh đổi hiệu năng hoặc chi phí và các kiểm tra vận hành tiếp theo." },
  ],
  corePrinciplesEn: [
    "Choose the platform from workload shape, not habit.",
    "Security basics are part of deployment, not a later cleanup.",
    "Prefer version-controlled infrastructure and reproducible commands.",
    "Optimize for latency, cost, and resource limits based on the selected platform.",
  ],
  corePrinciplesVi: [
    "Chọn nền tảng theo hình dạng workload, không theo thói quen.",
    "Nền tảng bảo mật là một phần của triển khai, không phải việc dọn sau.",
    "Ưu tiên hạ tầng có version control và lệnh có thể lặp lại.",
    "Tối ưu độ trễ, chi phí và giới hạn tài nguyên theo nền tảng đã chọn.",
  ],
  expertiseAreasEn: [
    "Cloudflare Workers, Pages, R2, D1, KV, and browser rendering",
    "Dockerfiles, Docker Compose, multi-stage builds, and local development",
    "Google Cloud Run, GKE, Cloud SQL, and gcloud operations",
    "Kubernetes cluster work with kubectl, Helm, RBAC, and network policies",
    "CI/CD, GitOps, multi-region deployments, and security audits",
  ],
  expertiseAreasVi: [
    "Cloudflare Workers, Pages, R2, D1, KV và browser rendering",
    "Dockerfile, Docker Compose, multi-stage build và môi trường dev cục bộ",
    "Google Cloud Run, GKE, Cloud SQL và thao tác bằng gcloud",
    "Vận hành Kubernetes với kubectl, Helm, RBAC và network policy",
    "CI/CD, GitOps, triển khai đa vùng và rà soát bảo mật",
  ],
  invocation,
  workflowModes: [
    { flag: "cloudflare", modeEn: "Edge/serverless", modeVi: "Edge/serverless", research: "Load Cloudflare references", redTeam: "Check bindings, latency, egress", validation: "wrangler deploy/dev evidence", cookFlag: "Workers/Pages/R2/D1" },
    { flag: "docker", modeEn: "Container", modeVi: "Container", research: "Load Docker guides", redTeam: "Check non-root, image size, ports", validation: "docker build/run evidence", cookFlag: "Docker/Compose" },
    { flag: "gcp", modeEn: "Google Cloud", modeVi: "Google Cloud", research: "Load gcloud services", redTeam: "Check region, service account, costs", validation: "gcloud command output", cookFlag: "Cloud Run/GKE/Cloud SQL" },
    { flag: "kubernetes", modeEn: "Cluster ops", modeVi: "Vận hành cluster", research: "Use upstream K8s/Helm docs", redTeam: "Check RBAC, network policies, resources", validation: "kubectl/helm state", cookFlag: "kubectl/Helm" },
  ],
  skillStack: [
    { name: "wrangler", type: "tool" },
    { name: "docker", type: "tool" },
    { name: "gcloud", type: "tool" },
    { name: "kubectl", type: "tool" },
    { name: "helm", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "Cloudflare review", labelVi: "Rà soát Cloudflare", command: "/ak:devops cloudflare \"review this Worker staging config and prepare deploy, dry-run, and rollback steps\"", whenEn: "Cloudflare Workers, Pages, R2, D1, KV, or Browser Rendering is central to the infrastructure task.", whenVi: "Cloudflare Workers, Pages, R2, D1, KV hoặc Browser Rendering là trọng tâm của việc hạ tầng.", expectedEn: "Maps the target to the right Cloudflare surface, loads the relevant references, prepares wrangler-oriented commands, and reports bindings, routes, limits, cost, and rollback evidence.", expectedVi: "Gắn đích với đúng phần Cloudflare, mở tài liệu liên quan, chuẩn bị lệnh theo wrangler và báo cáo binding, route, limit, chi phí cùng bằng chứng rollback.", recommended: true },
    { labelEn: "Docker review", labelVi: "Rà soát Docker", command: "/ak:devops docker \"analyze this Dockerfile and propose build/run improvements\"", whenEn: "A service needs Dockerfile or Docker Compose review before local development or deployment.", whenVi: "Một service cần rà soát Dockerfile hoặc Docker Compose trước khi phát triển local hay deploy.", expectedEn: "Uses Docker references and the analyzer-oriented workflow to check build context, ports, volumes, health checks, multi-stage builds, non-root runtime, and secret handling.", expectedVi: "Dùng tài liệu Docker và workflow kiểu analyzer để kiểm tra build context, port, volume, health check, multi-stage build, runtime không chạy root và cách xử lý secret." },
    { labelEn: "GCP deploy plan", labelVi: "Kế hoạch deploy GCP", command: "/ak:devops gcp \"prepare a Cloud Run deployment plan for this container image\"", whenEn: "Google Cloud Run, GKE, Cloud SQL, IAM, region, quota, or gcloud operations define the release risk.", whenVi: "Google Cloud Run, GKE, Cloud SQL, IAM, region, quota hoặc thao tác gcloud quyết định rủi ro phát hành.", expectedEn: "Loads Google Cloud and gcloud guidance, resolves project, region, service account, APIs, cost and rollback boundaries, then proposes verifiable Cloud Run or GKE commands.", expectedVi: "Mở hướng dẫn Google Cloud và gcloud, phân giải project, region, service account, API, ranh giới chi phí và rollback, rồi đề xuất lệnh Cloud Run hoặc GKE có thể xác minh." },
    { labelEn: "Kubernetes audit", labelVi: "Rà soát Kubernetes", command: "/ak:devops kubernetes \"review manifests for RBAC, network policies, resources, and Helm rollout risk\"", whenEn: "A Kubernetes cluster, manifest set, Helm release, RBAC policy, or GitOps workflow needs operational review.", whenVi: "Một cluster Kubernetes, bộ manifest, Helm release, policy RBAC hoặc workflow GitOps cần rà soát vận hành.", expectedEn: "Uses upstream Kubernetes and Helm references, checks context and namespace, then reviews RBAC, secrets, network policies, resources, rollout checks, and rollback commands.", expectedVi: "Dùng tài liệu upstream Kubernetes và Helm, kiểm tra context và namespace, rồi rà soát RBAC, secret, network policy, resource, kiểm tra rollout và lệnh rollback." },
  ],
};

export default data;
