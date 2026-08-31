import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-ckm-storage",
  command: "/ak:ckm-storage",
  kit: 'marketer',
  header: {
    titleEn: '/ak:ckm-storage — S3 storage router',
    titleVi: '/ak:ckm-storage — Bộ định tuyến lưu trữ S3',
    taglineEn: "Routes S3 storage work to list, sync, upload, or URL retrieval references, then executes the remaining arguments.",
    taglineVi: "Định tuyến việc lưu trữ S3 sang list, sync, upload hoặc lấy URL, rồi thực thi phần tham số còn lại.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse subcommand", titleVi: "Đọc subcommand", descEn: "Read the first word from the arguments as the intended storage action.", descVi: "Lấy từ đầu tiên trong tham số làm hành động lưu trữ cần chạy." },
    { number: 2, titleEn: "Route reference", titleVi: "Mở tài liệu đúng", descEn: "Load references/list.md, sync.md, upload.md, or url.md according to the subcommand.", descVi: "Tải references/list.md, sync.md, upload.md hoặc url.md theo subcommand." },
    { number: 3, titleEn: "List assets", titleVi: "Liệt kê tài sản", descEn: "Use list when the user needs to inspect available S3 objects or storage state.", descVi: "Dùng list khi cần xem các object S3 hoặc trạng thái lưu trữ hiện có." },
    { number: 4, titleEn: "Sync folders", titleVi: "Đồng bộ thư mục", descEn: "Use sync <folder> [remote-prefix] [--dry-run] [--extensions=.png,.jpg] when local and bucket contents need to be reconciled. Dry-run returns proposed object keys; a live run uploads matching files.", descVi: "Dùng sync <folder> [remote-prefix] [--dry-run] [--extensions=.png,.jpg] khi cần đồng bộ local với bucket. Dry-run trả object key dự kiến; live run mới upload file khớp." },
    { number: 5, titleEn: "Upload files", titleVi: "Tải tệp lên", descEn: "Use upload for one-off file or asset publication to S3.", descVi: "Dùng upload để đưa file hoặc asset riêng lẻ lên S3." },
    { number: 6, titleEn: "Return URLs", titleVi: "Trả URL", descEn: "Use url when the user needs retrievable links for stored objects.", descVi: "Dùng url khi người dùng cần link truy cập cho object đã lưu." },
    { number: 7, titleEn: "Execute remainder", titleVi: "Chạy phần còn lại", descEn: "Pass the remaining arguments to the loaded reference workflow.", descVi: "Chuyển phần tham số còn lại cho workflow tham chiếu đã tải." },
  ],
  corePrinciplesEn: [
    "Keep the command as a thin router over documented S3 operations.",
    "Use only the listed storage subcommands: list, sync, upload, and url.",
    "Load the matching reference before executing action-specific behavior.",
  ],
  corePrinciplesVi: [
    "Giữ command như một bộ định tuyến mỏng cho các thao tác S3 đã ghi rõ.",
    "Chỉ dùng các subcommand lưu trữ đã liệt kê: list, sync, upload và url.",
    "Tải đúng tài liệu tham chiếu trước khi chạy hành vi riêng của từng action.",
  ],
  promptExamples: [
    { labelEn: "List storage", labelVi: "Liệt kê lưu trữ", command: "/ak:ckm-storage list",
      commandVi: '/ak:ckm-storage list', whenEn: "Use when you need to inspect objects or bucket contents.", whenVi: "Dùng khi cần xem object hoặc nội dung bucket.", expectedEn: "The list reference is loaded and the storage listing action runs.", expectedVi: "Tài liệu list được tải và thao tác liệt kê lưu trữ được chạy.", recommended: true },
    { labelEn: "Dry-run filtered sync", labelVi: "Dry-run sync có lọc", command: "/ak:ckm-storage sync assets/ --dry-run --extensions=.png,.jpg",
      commandVi: '/ak:ckm-storage sync assets/ --dry-run --extensions=.png,.jpg', whenEn: "Use when a local asset folder should be previewed and filtered before upload.", whenVi: "Dùng khi cần xem trước và lọc thư mục asset local trước khi upload.", expectedEn: "The sync workflow scans matching files and reports proposed object keys without uploading.", expectedVi: "Workflow sync quét file khớp bộ lọc và báo object key sẽ tạo, chưa upload." },
    { labelEn: "Upload file", labelVi: "Tải file lên", command: "/ak:ckm-storage upload assets/banner.png",
      commandVi: '/ak:ckm-storage upload assets/banner.png', whenEn: "Use to publish a specific file to storage.", whenVi: "Dùng để đưa một file cụ thể lên storage.", expectedEn: "The upload reference guides the file upload.", expectedVi: "Tài liệu upload hướng dẫn thao tác tải file lên." },
    { labelEn: "Get object URL", labelVi: "Lấy URL object", command: "/ak:ckm-storage url assets/banner.png",
      commandVi: '/ak:ckm-storage url assets/banner.png', whenEn: "Use when a stored object needs a retrievable link.", whenVi: "Dùng khi object đã lưu cần link truy cập.", expectedEn: "The URL reference returns or builds the object link.", expectedVi: "Tài liệu URL trả về hoặc dựng link cho object." },
  ],
};

export default data;
