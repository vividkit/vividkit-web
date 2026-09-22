import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-marketing-dashboard",
  command: "/ak:marketing-dashboard",
  kit: 'marketer',
  header: {
    titleEn: '/ak:marketing-dashboard — Local Assets, Brand, and Settings dashboard',
    titleVi: '/ak:marketing-dashboard — Dashboard local cho Assets, Brand và Settings',
    taglineEn: "Operate the local Assets, Brand, and Settings dashboard by treating its dashboard documentation and live skill catalog as the source of truth.",
    taglineVi: "Vận hành dashboard local cho Assets, Brand và Settings bằng cách lấy tài liệu dashboard và catalog skill runtime làm nguồn đúng."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Read authority",
      titleVi: "Đọc nguồn đúng",
      descEn: "Read the dashboard README when present because it owns current features, routes, storage, commands, configuration, validation, and troubleshooting.",
      descVi: "Đọc README của dashboard khi có vì đó là nơi quyết định feature, route, storage, command, cấu hình, kiểm tra và xử lý lỗi hiện tại."
    },
    {
      number: 2,
      titleEn: "Avoid inference",
      titleVi: "Không suy đoán",
      descEn: "Do not infer campaign, content-generation, automation, or authentication behavior from the skill name or older versions.",
      descVi: "Không suy ra campaign, tạo content, automation hay authentication chỉ từ tên skill hoặc phiên bản cũ."
    },
    {
      number: 3,
      titleEn: "Resolve install",
      titleVi: "Tìm bản cài thật",
      descEn: "Resolve the installed skill directory through the runtime's live skill catalog before running referenced scripts.",
      descVi: "Xác định thư mục skill đang cài qua live skill catalog của runtime trước khi chạy script được nhắc tới."
    },
    {
      number: 4,
      titleEn: "Run dashboard",
      titleVi: "Chạy dashboard",
      descEn: "Use only the commands documented by the dashboard authority for the current installation.",
      descVi: "Chỉ dùng command được nguồn dashboard của bản cài hiện tại ghi lại."
    },
    {
      number: 5,
      titleEn: "Report URLs",
      titleVi: "Báo URL",
      descEn: "Report the URLs printed by the script so the user knows exactly where the local dashboard is running.",
      descVi: "Báo các URL script in ra để user biết dashboard local đang chạy ở đâu."
    },
    {
      number: 6,
      titleEn: "Surface fixes",
      titleVi: "Nêu remediation",
      descEn: "If SQLite driver remediation appears, surface it verbatim instead of paraphrasing or hiding it.",
      descVi: "Nếu có hướng khắc phục SQLite driver, nêu nguyên văn thay vì diễn giải hoặc giấu đi."
    }
  ],
  hardGate: {
    type: "critical",
    titleEn: "Dashboard docs authority",
    titleVi: "Tài liệu dashboard là nguồn đúng",
    contentEn: "Do not infer behavior from the dashboard name or old versions. Resolve the installed skill directory through the live catalog before running referenced scripts.",
    contentVi: "Không suy đoán hành vi từ tên dashboard hoặc bản cũ. Phải xác định thư mục skill đã cài qua live catalog trước khi chạy script được nhắc tới."
  },
  corePrinciplesEn: [
    "Current dashboard docs beat assumptions",
    "Live installation paths beat hardcoded paths",
    "Report exact printed URLs",
    "Surface SQLite remediation verbatim"
  ],
  corePrinciplesVi: [
    "Tài liệu dashboard hiện tại thắng mọi giả định",
    "Path từ bản cài live tốt hơn path hardcode",
    "Báo đúng URL được in ra",
    "Nêu nguyên văn remediation SQLite"
  ],
  expertiseAreasEn: [
    "Assets dashboard",
    "Brand dashboard",
    "Settings dashboard",
    "Local script operation",
    "SQLite driver troubleshooting"
  ],
  expertiseAreasVi: [
    "Dashboard Assets",
    "Dashboard Brand",
    "Dashboard Settings",
    "Vận hành script local",
    "Xử lý SQLite driver"
  ],
  invocation: {
    syntax: '/ak:marketing-dashboard [start|stop|status|open]',
    arguments: [
      {
        token: '[start|stop|status|open]',
        titleEn: 'Dashboard operation',
        titleVi: 'Thao tác dashboard',
        descEn: 'Optional local dashboard action. Omit it to inspect authority docs and reuse an already running matching process. Do not infer campaign or auth behavior from the name.',
        descVi: 'Thao tác dashboard local tùy chọn. Bỏ qua để đọc tài liệu nguồn đúng và tái dùng process khớp đang chạy. Không suy ra campaign hay auth từ tên skill.',
        required: false,
        exampleCommand: '/ak:marketing-dashboard status',
        exampleCommandVi: '/ak:marketing-dashboard status',
      },
    ],
    subcommands: [
      {
        name: 'start',
        syntax: '/ak:marketing-dashboard start',
        titleEn: 'Start',
        titleVi: 'Start',
        descEn: 'Start the local dashboard after resolving the installed skill directory and reusing a matching project process when one exists.',
        descVi: 'Start dashboard local sau khi xác định thư mục skill đã cài và tái dùng process project khớp nếu đã có.',
        outcomeEn: 'Dashboard process started or reused, with printed loopback URLs and any SQLite driver remediation quoted verbatim.',
        outcomeVi: 'Process dashboard được start hoặc tái dùng, kèm URL loopback được in ra và hướng khắc phục SQLite driver nếu có, nêu nguyên văn.',
        exampleCommand: '/ak:marketing-dashboard start',
        exampleCommandVi: '/ak:marketing-dashboard start',
      },
      {
        name: 'stop',
        syntax: '/ak:marketing-dashboard stop',
        titleEn: 'Stop',
        titleVi: 'Stop',
        descEn: 'Stop a dashboard process this skill owns after verifying ownership. Do not kill an unrelated listener on the same port.',
        descVi: 'Stop process dashboard do skill này sở hữu sau khi xác minh ownership. Không kill listener không liên quan trên cùng port.',
        outcomeEn: 'Owned dashboard process stopped; unrelated port listeners are left untouched.',
        outcomeVi: 'Process dashboard thuộc quyền sở hữu được stop; listener port không liên quan được giữ nguyên.',
        exampleCommand: '/ak:marketing-dashboard stop',
        exampleCommandVi: '/ak:marketing-dashboard stop',
      },
      {
        name: 'status',
        syntax: '/ak:marketing-dashboard status',
        titleEn: 'Status',
        titleVi: 'Status',
        descEn: 'Inspect whether a matching local dashboard process is running and report PID, port, and printed URLs.',
        descVi: 'Kiểm tra process dashboard local khớp có đang chạy không và báo PID, port cùng URL được in ra.',
        outcomeEn: 'Running or not-running status with exact printed URLs, without guessing campaign features.',
        outcomeVi: 'Trạng thái đang chạy hoặc không, kèm URL in ra chính xác, không đoán feature campaign.',
        exampleCommand: '/ak:marketing-dashboard status',
        exampleCommandVi: '/ak:marketing-dashboard status',
      },
      {
        name: 'open',
        syntax: '/ak:marketing-dashboard open',
        titleEn: 'Open',
        titleVi: 'Open',
        descEn: 'Open or report the live local Assets, Brand, and Settings dashboard using documented loopback URLs.',
        descVi: 'Mở hoặc báo dashboard local đang chạy cho Assets, Brand và Settings bằng URL loopback đã ghi.',
        outcomeEn: 'Exact printed dashboard URLs for Assets, Brand, and Settings, taken from the running process or documented start output.',
        outcomeVi: 'URL dashboard in ra chính xác cho Assets, Brand và Settings, lấy từ process đang chạy hoặc output start đã ghi.',
        exampleCommand: '/ak:marketing-dashboard open',
        exampleCommandVi: '/ak:marketing-dashboard open',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Default inspect',
      labelVi: 'Kiểm tra mặc định',
      command: '/ak:marketing-dashboard',
      commandVi: '/ak:marketing-dashboard',
      whenEn: 'You need the local Assets, Brand, and Settings dashboard without guessing extra product surfaces.',
      whenVi: 'Cần dashboard local cho Assets, Brand và Settings mà không đoán thêm bề mặt sản phẩm.',
      expectedEn: 'Reads the dashboard README, resolves the installed skill path, reuses a matching process when present, and reports the exact printed loopback URLs.',
      expectedVi: 'Đọc README dashboard, xác định path skill đã cài, tái dùng process khớp nếu có, và báo đúng URL loopback được in ra.',
      recommended: true,
    },
    {
      labelEn: 'Start dashboard',
      labelVi: 'Start dashboard',
      command: '/ak:marketing-dashboard start',
      commandVi: '/ak:marketing-dashboard start',
      whenEn: 'No matching local dashboard process is running and you need documented start commands.',
      whenVi: 'Chưa có process dashboard local khớp đang chạy và cần lệnh start đã được ghi.',
      expectedEn: 'Resolves the live install, starts only documented dashboard scripts, tracks PID and port, and quotes any SQLite driver remediation verbatim.',
      expectedVi: 'Xác định bản cài live, chỉ start script dashboard đã ghi, theo dõi PID và port, và nêu nguyên văn hướng khắc phục SQLite driver nếu có.',
    },
    {
      labelEn: 'Stop dashboard',
      labelVi: 'Stop dashboard',
      command: '/ak:marketing-dashboard stop',
      commandVi: '/ak:marketing-dashboard stop',
      whenEn: 'You started the dashboard and now need to stop only the owned process.',
      whenVi: 'Bạn đã start dashboard và giờ cần stop đúng process thuộc quyền sở hữu.',
      expectedEn: 'Verifies ownership before stopping, avoids killing unrelated listeners on the same port, and reports that the owned dashboard process has stopped.',
      expectedVi: 'Xác minh ownership trước khi stop, không kill listener không liên quan trên cùng port, và báo process dashboard thuộc quyền sở hữu đã dừng.',
    },
    {
      labelEn: 'Dashboard status',
      labelVi: 'Status dashboard',
      command: '/ak:marketing-dashboard status',
      commandVi: '/ak:marketing-dashboard status',
      whenEn: 'You need to know whether the local dashboard is already running before starting another copy.',
      whenVi: 'Cần biết dashboard local đã chạy chưa trước khi start thêm bản khác.',
      expectedEn: 'Inspects existing project processes, reports PID, port, and printed URLs when a match exists, and does not invent campaign or authentication features.',
      expectedVi: 'Kiểm process project hiện có, báo PID, port và URL in ra khi có bản khớp, và không bịa feature campaign hay authentication.',
    },
    {
      labelEn: 'Open dashboard',
      labelVi: 'Open dashboard',
      command: '/ak:marketing-dashboard open',
      commandVi: '/ak:marketing-dashboard open',
      whenEn: 'You want the live local dashboard URLs, not a guessed campaign or content-generation surface.',
      whenVi: 'Muốn URL dashboard local đang chạy, không phải bề mặt campaign hay tạo content suy ra.',
      expectedEn: 'Opens or reports the documented loopback URLs for Assets, Brand, and Settings from the running process or start output.',
      expectedVi: 'Mở hoặc báo URL loopback đã ghi cho Assets, Brand và Settings từ process đang chạy hoặc output start.',
    },
  ]
};

export default data;
