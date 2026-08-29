import type { SkillInfographic } from '@/data/guides/how-ck-works';

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
    { labelEn: "Cloudflare deploy", labelVi: "Triển khai Cloudflare", command: "/ak:devops cloudflare deploy our API worker", whenEn: "A serverless edge app needs deployment through Cloudflare tooling.", whenVi: "Ứng dụng serverless ở edge cần triển khai bằng công cụ Cloudflare.", expectedEn: "Chooses Workers or Pages, loads the Cloudflare reference, runs or prepares wrangler commands, and reports security/performance notes.", expectedVi: "Chọn Workers hoặc Pages, mở tài liệu Cloudflare, chạy hoặc chuẩn bị lệnh wrangler và báo cáo ghi chú bảo mật/hiệu năng.", recommended: true },
    { labelEn: "Containerize app", labelVi: "Đóng gói container", command: "/ak:devops docker containerize this service", whenEn: "A service needs Docker or Docker Compose for local or deployable runtime.", whenVi: "Một service cần Docker hoặc Docker Compose cho môi trường chạy local hay triển khai.", expectedEn: "Uses Docker references, favors multi-stage and non-root patterns, then verifies build/run behavior.", expectedVi: "Dùng tài liệu Docker, ưu tiên multi-stage và không chạy root, rồi xác minh build/run." },
    { labelEn: "Kubernetes audit", labelVi: "Rà soát Kubernetes", command: "/ak:devops kubernetes audit RBAC and resource limits", whenEn: "A cluster or manifests need security and operations review.", whenVi: "Cụm hoặc manifest cần rà soát bảo mật và vận hành.", expectedEn: "Checks RBAC, network policies, image/security posture, and resource limits with kubectl/Helm evidence.", expectedVi: "Kiểm tra RBAC, network policy, trạng thái image/bảo mật và giới hạn tài nguyên bằng bằng chứng kubectl/Helm." },
  ],
};

export default data;
