import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:document-skills "<document task>"',
  arguments: [
    {
      token: '"<document task>"',
      titleEn: 'Document task',
      titleVi: 'Tác vụ tài liệu',
      descEn: 'Natural-language request naming the source file, target output, operation, preservation needs, and verification standard. The Skill declares no separate positional arguments or default output directory.',
      descVi: 'Yêu cầu bằng ngôn ngữ tự nhiên nêu source file, output đích, thao tác, phần cần giữ và chuẩn xác minh. Skill không khai báo argument vị trí riêng hay thư mục output mặc định.',
      required: true,
      exampleCommand: '/ak:document-skills "Create board-report.xlsx from approved-metrics.csv with formulas for totals and growth, preserve source precision, add a Sources sheet, recalculate with LibreOffice, scan every formula result for errors, and save to ./deliverables without changing the CSV."',
    },
  ],
};

const data: SkillInfographic = {
  id: "ak-document-skills",
  command: "/ak:document-skills",
  kit: "engineer",
  header: {
    titleEn: "/ak:document-skills — Edit Office-style documents",
    titleVi: "/ak:document-skills — Chỉnh sửa tài liệu kiểu Office",
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
  invocation,
  skillStack: [
    { name: "references/", type: "tool" },
    { name: "scripts/", type: "tool" },
    { name: "resources/", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "Create spreadsheet", labelVi: "Tạo spreadsheet", command: "/ak:document-skills \"Create board-report.xlsx from approved-metrics.csv with formulas for totals and growth, add a Sources sheet, and verify the workbook before returning the output path.\"", whenEn: "Use when tabular source data needs to become a real XLSX workbook rather than a prose table.", whenVi: "Dùng khi dữ liệu dạng bảng cần thành workbook XLSX thật thay vì bảng văn bản.", expectedEn: "Classifies the request as xlsx work, uses the bundled document material for spreadsheets, creates the workbook artifact, and inspects formulas, sheets, and cell placement before delivery.", expectedVi: "Phân loại yêu cầu là công việc xlsx, dùng tài liệu document đi kèm cho spreadsheet, tạo workbook artifact và kiểm tra formula, sheet cùng vị trí ô trước khi bàn giao.", recommended: true },
    { labelEn: "Edit Word document", labelVi: "Sửa tài liệu Word", command: "/ak:document-skills \"Update proposal.docx with the approved executive summary, preserve existing headings and tables, and return a verified edited copy instead of overwriting the original.\"", whenEn: "Use when a DOCX needs targeted content or structure edits while retaining Office document semantics.", whenVi: "Dùng khi DOCX cần sửa nội dung hoặc cấu trúc có mục tiêu mà vẫn giữ ngữ nghĩa tài liệu Office.", expectedEn: "Routes the task to docx handling, inspects the existing document structure, applies the requested edits to a separate artifact, and verifies that headings, tables, and requested content survived.", expectedVi: "Route tác vụ sang xử lý docx, kiểm tra cấu trúc tài liệu hiện có, áp dụng chỉnh sửa vào artifact riêng và xác minh heading, bảng cùng nội dung yêu cầu vẫn được giữ." },
    { labelEn: "Read PDF form", labelVi: "Đọc form PDF", command: "/ak:document-skills \"Read intake-form.pdf, extract its form fields and table content, and report any extraction limits or fields that require visual inspection.\"", whenEn: "Use when a PDF needs structured extraction, form-field reading, or artifact inspection instead of a plain summary.", whenVi: "Dùng khi PDF cần trích xuất có cấu trúc, đọc field biểu mẫu hoặc kiểm tra artifact thay vì chỉ tóm tắt.", expectedEn: "Uses the PDF route, inspects the file for structured content and form fields, extracts the requested data, and names any conversion or inspection limits in the result.", expectedVi: "Dùng route PDF, kiểm tra file để tìm nội dung có cấu trúc và field biểu mẫu, trích dữ liệu được yêu cầu rồi nêu mọi giới hạn chuyển đổi hoặc kiểm tra trong kết quả." },
    { labelEn: "Build slide deck", labelVi: "Tạo slide deck", command: "/ak:document-skills \"Create a 10-slide project-update.pptx from outline.md, use the supplied template, keep speaker notes where provided, and verify the deck layout before delivery.\"", whenEn: "Use when a PowerPoint deliverable must be created or updated as a PPTX artifact with slide structure.", whenVi: "Dùng khi cần tạo hoặc cập nhật deliverable PowerPoint dưới dạng artifact PPTX có cấu trúc slide.", expectedEn: "Routes the request to pptx handling, uses the bundled document guidance for slides, creates the deck artifact, and reviews slide structure, notes, and layout surface before returning it.", expectedVi: "Route yêu cầu sang xử lý pptx, dùng hướng dẫn document đi kèm cho slide, tạo deck artifact và review cấu trúc slide, note cùng bề mặt layout trước khi trả file." },
  ],
};

export default data;
