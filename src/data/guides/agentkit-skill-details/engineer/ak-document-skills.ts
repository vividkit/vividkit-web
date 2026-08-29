import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-document-skills",
  command: "/ak:document-skills",
  kit: "engineer",
  header: {
    titleEn: "/ak:document-skills",
    titleVi: "/ak:document-skills",
    taglineEn: "Read, create, and edit Office-style documents: docx, pdf, pptx, xlsx, tables, forms, slides, and spreadsheets.",
    taglineVi: "Đọc, tạo và chỉnh sửa tài liệu kiểu Office: docx, pdf, pptx, xlsx, bảng, biểu mẫu, slide và spreadsheet.",
  },
  processFlow: [
    { number: 1, titleEn: "Identify Format", titleVi: "Nhận diện định dạng", descEn: "Determine whether the task targets docx, pdf, pptx, xlsx, tables, forms, slides, or spreadsheets.", descVi: "Xác định tác vụ nhắm tới docx, pdf, pptx, xlsx, bảng, biểu mẫu, slide hay spreadsheet." },
    { number: 2, titleEn: "Clarify Operation", titleVi: "Làm rõ thao tác", descEn: "Classify the requested operation as read, create, edit, extract, populate, convert, or summarize.", descVi: "Phân loại thao tác cần làm là đọc, tạo, chỉnh sửa, trích xuất, điền dữ liệu, chuyển đổi hay tóm tắt." },
    { number: 3, titleEn: "Load Underlying Material", titleVi: "Nạp tài liệu nền", descEn: "Use the skill's references, scripts, or resources directory for the concrete document workflow.", descVi: "Dùng thư mục references, scripts hoặc resources của skill cho workflow tài liệu cụ thể." },
    { number: 4, titleEn: "Inspect Existing File", titleVi: "Kiểm tra file sẵn có", descEn: "When editing or reading, inspect document structure and content before deciding what to change or extract.", descVi: "Khi chỉnh sửa hoặc đọc, kiểm tra cấu trúc và nội dung tài liệu trước khi quyết định cần đổi hay trích gì." },
    { number: 5, titleEn: "Preserve Structure", titleVi: "Giữ cấu trúc", descEn: "Keep tables, forms, slide hierarchy, spreadsheet sheets, and document semantics intact unless the user asked to restructure them.", descVi: "Giữ nguyên bảng, form, thứ bậc slide, sheet spreadsheet và ngữ nghĩa tài liệu trừ khi người dùng yêu cầu tái cấu trúc." },
    { number: 6, titleEn: "Apply Document Change", titleVi: "Áp dụng thay đổi", descEn: "Create or edit the Office artifact using the appropriate scripts or resources for that file type.", descVi: "Tạo hoặc sửa artifact Office bằng script hoặc resource phù hợp với loại file đó." },
    { number: 7, titleEn: "Verify Artifact", titleVi: "Xác minh artifact", descEn: "Re-open or inspect the produced file enough to confirm the requested content, formatting surface, and data placement.", descVi: "Mở lại hoặc kiểm tra file đã tạo đủ để xác nhận nội dung, bề mặt định dạng và vị trí dữ liệu đúng yêu cầu." },
    { number: 8, titleEn: "Return Usable File", titleVi: "Trả file dùng được", descEn: "Report the file path, format, operations performed, and any limitations in extraction or conversion.", descVi: "Báo path file, định dạng, thao tác đã làm và mọi giới hạn khi trích xuất hoặc chuyển đổi." },
  ],
  corePrinciplesEn: [
    "The file format drives the workflow: docx, pdf, pptx, and xlsx have different constraints.",
    "Preserve document semantics instead of flattening everything into text.",
    "Use references, scripts, and resources from the skill rather than improvising a document pipeline.",
    "Verify the produced artifact, not only the command that wrote it.",
  ],
  corePrinciplesVi: [
    "Định dạng file quyết định workflow: docx, pdf, pptx và xlsx có ràng buộc khác nhau.",
    "Giữ ngữ nghĩa tài liệu thay vì biến mọi thứ thành text phẳng.",
    "Dùng references, scripts và resources của skill thay vì tự dựng pipeline tài liệu.",
    "Xác minh artifact đã tạo, không chỉ xác minh lệnh ghi file.",
  ],
  expertiseAreasEn: [
    "Word document reading, authoring, and editing",
    "PDF inspection, extraction, and generated output review",
    "PowerPoint slide creation and updates",
    "Excel workbook, sheet, table, and form handling",
    "Document structure preservation across conversions or edits",
  ],
  expertiseAreasVi: [
    "Đọc, soạn và chỉnh sửa tài liệu Word",
    "Kiểm tra, trích xuất PDF và review output đã sinh",
    "Tạo và cập nhật slide PowerPoint",
    "Xử lý workbook Excel, sheet, bảng và biểu mẫu",
    "Giữ cấu trúc tài liệu qua chuyển đổi hoặc chỉnh sửa",
  ],
  workflowModes: [
    { flag: "docx", modeEn: "Word document", modeVi: "Tài liệu Word", research: "Load docx resources", redTeam: "Check headings/tables/forms", validation: "Re-open produced document", cookFlag: "docx" },
    { flag: "pdf", modeEn: "PDF", modeVi: "PDF", research: "Load pdf resources", redTeam: "Check extraction/conversion limits", validation: "Inspect rendered output", cookFlag: "pdf" },
    { flag: "pptx", modeEn: "Slides", modeVi: "Slide", research: "Load pptx resources", redTeam: "Check hierarchy and layout", validation: "Review generated deck", cookFlag: "pptx" },
    { flag: "xlsx", modeEn: "Spreadsheet", modeVi: "Spreadsheet", research: "Load xlsx resources", redTeam: "Check sheets/tables/formulas", validation: "Inspect workbook data", cookFlag: "xlsx" },
  ],
  skillStack: [
    { name: "references/", type: "tool" },
    { name: "scripts/", type: "tool" },
    { name: "resources/", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "Edit Word doc", labelVi: "Sửa tài liệu Word", command: "/ak:document-skills update the headings and summary in this docx", whenEn: "A Word document needs targeted content or structure updates.", whenVi: "Tài liệu Word cần cập nhật nội dung hoặc cấu trúc có mục tiêu.", expectedEn: "Loads docx material, preserves document structure, edits the file, and verifies the result.", expectedVi: "Nạp vật liệu docx, giữ cấu trúc tài liệu, sửa file và xác minh kết quả.", recommended: true },
    { labelEn: "Extract PDF", labelVi: "Trích xuất PDF", command: "/ak:document-skills read this pdf and extract the form fields", whenEn: "A PDF needs structured reading rather than plain prose summary.", whenVi: "PDF cần đọc có cấu trúc thay vì chỉ tóm tắt văn bản.", expectedEn: "Inspects the PDF, extracts requested structure, and reports extraction limits if present.", expectedVi: "Kiểm tra PDF, trích cấu trúc được yêu cầu và báo giới hạn trích xuất nếu có." },
    { labelEn: "Build spreadsheet", labelVi: "Tạo spreadsheet", command: "/ak:document-skills create an xlsx budget table from these rows", whenEn: "Rows, forms, or calculations need a usable workbook.", whenVi: "Các dòng dữ liệu, form hoặc phép tính cần thành workbook dùng được.", expectedEn: "Creates an xlsx artifact with the requested tables or sheets and verifies cell placement.", expectedVi: "Tạo artifact xlsx với bảng hoặc sheet được yêu cầu và xác minh vị trí ô." },
  ],
};

export default data;
