import type { SkillInfographic } from '@/data/guides/how-ck-works';

// Beta-only core skill: authored from the beta SKILL.md and its references (no ak-docs page yet).
const data: SkillInfographic = {
  id: 'ak-vault',
  command: '/ak-vault',
  kit: 'engineer',
  header: {
    titleEn: '/ak-vault — Secrets without printing values',
    titleVi: '/ak-vault — Quản lý secret không lộ giá trị',
    taglineEn:
      'Store, find, sync, rotate and use API keys, tokens and dotenv values through the ak secrets vault, or through the dotenv files or secret manager you already chose. No secret value ever enters the conversation.',
    taglineVi:
      'Lưu, tìm, đồng bộ, xoay vòng và dùng API key, token và giá trị dotenv qua vault ak secrets, hoặc qua file dotenv hay trình quản lý secret bạn đã chọn từ trước. Không giá trị secret nào lọt vào cuộc trò chuyện.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Values never appear in the chat, the command line or a log',
    titleVi: 'Giá trị không bao giờ xuất hiện trong chat, dòng lệnh hay log',
    contentEn:
      'Values reach ak secrets only through stdin or a file, from a script that does not echo them; a value typed as a command argument is rejected and would leak into shell history. The skill never asks you to paste a value, never reveals one to confirm a write, and does not read a dotenv file just to see what is inside. Granting or approving an agent, deleting a secret and exporting values are yours to run in your own terminal.',
    contentVi:
      'Giá trị chỉ đi vào ak secrets qua stdin hoặc file, từ một script không in nó ra; giá trị gõ thẳng làm tham số lệnh sẽ bị từ chối và còn lộ vào lịch sử shell. Skill không bao giờ bảo bạn dán giá trị vào chat, không hiện giá trị ra để xác nhận đã ghi, và không đọc file dotenv chỉ để xem bên trong có gì. Cấp quyền hay duyệt cho agent, xóa secret và xuất giá trị là việc bạn tự chạy trong terminal của mình.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read your recorded choice', titleVi: 'Đọc lựa chọn bạn đã ghi', descEn: 'Reads secret_store.choice from ak config prefs. ak-vault uses ak secrets; env-file keeps working with your dotenv files; external:<name> follows that manager. If nothing is recorded and the task involves a credential, it asks once in an interactive session, for this project or all projects, and records the answer.', descVi: 'Đọc secret_store.choice từ ak config prefs. ak-vault thì dùng ak secrets; env-file thì tiếp tục làm việc với file dotenv của bạn; external:<name> thì theo đúng trình quản lý đó. Nếu chưa ghi gì mà task có đụng tới credential, nó hỏi đúng một lần trong phiên tương tác, áp dụng cho project này hay mọi project, rồi ghi lại câu trả lời.' },
    { number: 2, titleEn: 'Settle project and environment', titleVi: 'Chốt project và môi trường', descEn: 'Infers the environment from the file name or deploy target, the project from the repository, and the provider from the variable prefix. When project or environment is still unclear it asks one question before writing; a non-interactive run stops and names the missing fields.', descVi: 'Suy ra môi trường từ tên file hoặc đích deploy, project từ repository, và provider từ tiền tố của biến. Khi project hoặc môi trường vẫn chưa rõ, nó hỏi một câu trước khi ghi; lượt chạy không tương tác thì dừng lại và nêu đúng các trường còn thiếu.' },
    { number: 3, titleEn: 'Check before writing', titleVi: 'Kiểm tra trước khi ghi', descEn: 'Searches existing refs first. For a candidate ref it reads the hint (public prefix and last 4 characters) and runs ak secrets compare, which answers match or differs and prints neither value. An existing ref is rotated or annotated instead of re-created.', descVi: 'Tìm các ref đã có trước. Với ref có khả năng trùng, nó đọc hint (tiền tố công khai và 4 ký tự cuối) và chạy ak secrets compare, lệnh chỉ trả lời match hoặc differs và không in giá trị nào. Ref đã có thì được rotate hoặc annotate thay vì tạo lại.' },
    { number: 4, titleEn: 'Store, import and sync', titleVi: 'Lưu, import và đồng bộ', descEn: 'Stores one value through a non-echoing script, or previews and imports whole dotenv files with import-env (the source file is never edited or deleted), then checks the cloud vault state with ak secrets sync status before saying anything about sync.', descVi: 'Lưu một giá trị qua script không in ra, hoặc xem trước rồi import cả file dotenv bằng import-env (file nguồn không bao giờ bị sửa hay xóa), sau đó kiểm tra trạng thái vault trên cloud bằng ak secrets sync status trước khi nói gì về việc đồng bộ.' },
    { number: 5, titleEn: 'Use and rotate', titleVi: 'Dùng và xoay vòng', descEn: 'Commands use ${secret:NAME}, which supported runtimes resolve just before a shell command or fetch URL runs. Rotation goes: rotate at the provider, store the new value, sync, then revoke the old credential, reporting each step without the value.', descVi: 'Lệnh dùng ${secret:NAME}, được các runtime hỗ trợ thay bằng giá trị ngay trước khi lệnh shell hoặc URL fetch chạy. Xoay vòng theo thứ tự: đổi ở provider, lưu giá trị mới, đồng bộ, rồi thu hồi credential cũ, báo kết quả từng bước mà không kèm giá trị.' },
  ],
  corePrinciplesEn: [
    'The ak secrets vault is recommended, not required; your recorded choice of dotenv files or another manager is followed.',
    'Report refs, counts, exit codes and [redacted], never a value.',
    'Ask only when a decision is genuinely missing, then record the answer so it is not asked again.',
    'Commands that refuse to run under an agent are handed to you as the exact command, not worked around.',
  ],
  corePrinciplesVi: [
    'Vault ak secrets là khuyến nghị, không bắt buộc; lựa chọn bạn đã ghi là file dotenv hay trình quản lý khác vẫn được làm theo.',
    'Chỉ báo ref, số lượng, mã thoát và [redacted], không bao giờ báo giá trị.',
    'Chỉ hỏi khi thật sự thiếu một quyết định, rồi ghi lại câu trả lời để không phải hỏi lại.',
    'Lệnh nào từ chối chạy dưới agent thì được đưa lại cho bạn đúng câu lệnh, không tìm đường vòng.',
  ],
  invocation: {
    syntax: '/ak-vault [store|find|sync|use|rotate|import] [ref or .env path]',
    arguments: [
      {
        token: '[store|find|sync|use|rotate|import]',
        titleEn: 'What to do',
        titleVi: 'Việc cần làm',
        descEn: 'Store a new value, find existing refs, sync with your other devices, use a secret in a command, rotate a value, or import dotenv files. Without it, the skill works out the step from the task.',
        descVi: 'Lưu giá trị mới, tìm ref đã có, đồng bộ với các thiết bị khác, dùng secret trong một lệnh, xoay vòng giá trị, hoặc import file dotenv. Không ghi thì skill tự suy ra bước cần làm từ task.',
        required: false,
        exampleCommand: '/ak-vault find STRIPE',
      },
      {
        token: '[ref or .env path]',
        titleEn: 'Ref or dotenv path',
        titleVi: 'Ref hoặc đường dẫn dotenv',
        descEn: 'A stored ref name such as STRIPE_API_KEY, or the dotenv file or directory to work from.',
        descVi: 'Tên ref đã lưu như STRIPE_API_KEY, hoặc file hay thư mục dotenv cần làm việc.',
        required: false,
        exampleCommand: '/ak-vault import .env.production',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Move a dotenv file into the vault',
      labelVi: 'Chuyển file dotenv vào vault',
      command: '/ak-vault import .env.production',
      commandVi: '/ak-vault import .env.production',
      whenEn: 'Use when a project keeps credentials in dotenv files and you chose the ak secrets vault.',
      whenVi: 'Dùng khi project đang giữ credential trong file dotenv và bạn đã chọn vault ak secrets.',
      expectedEn: 'A dry-run plan with counts but no values, then an import tagged with project and production environment; the source file stays untouched and moving the app off it is left to you.',
      expectedVi: 'Một kế hoạch dry-run chỉ có số lượng, không có giá trị, rồi import có gắn project và môi trường production; file nguồn được giữ nguyên và việc chuyển app khỏi file đó là quyết định của bạn.',
      recommended: true,
    },
    {
      labelEn: 'Check which key is stored',
      labelVi: 'Kiểm tra key nào đang được lưu',
      command: '/ak-vault find STRIPE',
      commandVi: '/ak-vault find STRIPE',
      whenEn: 'Use when you are not sure whether a stored ref is the old key, the rotated one, or the one in your dotenv file.',
      whenVi: 'Dùng khi bạn không chắc ref đang lưu là key cũ, key đã xoay vòng, hay đúng key trong file dotenv.',
      expectedEn: 'Matching refs with their metadata and hints, plus a match or differs answer from ak secrets compare, without revealing either value or creating a duplicate ref.',
      expectedVi: 'Các ref khớp kèm metadata và hint, cùng câu trả lời match hoặc differs từ ak secrets compare, mà không hiện giá trị nào và không tạo ref trùng.',
    },
    {
      labelEn: 'Rotate a leaked key',
      labelVi: 'Xoay vòng key bị lộ',
      command: '/ak-vault rotate STRIPE_API_KEY',
      commandVi: '/ak-vault rotate STRIPE_API_KEY',
      whenEn: 'Use after a key was exposed or reached its rotation date.',
      whenVi: 'Dùng khi một key đã bị lộ hoặc tới hạn xoay vòng.',
      expectedEn: 'The order to follow (rotate at the provider, store the new value, sync, revoke the old one), the revoke and audit commands you run yourself, and each step reported without the value.',
      expectedVi: 'Thứ tự cần làm (đổi ở provider, lưu giá trị mới, đồng bộ, thu hồi key cũ), các lệnh revoke và audit để bạn tự chạy, và kết quả từng bước được báo mà không kèm giá trị.',
    },
  ],
  reportOutput: {
    titleEn: 'Vault result',
    titleVi: 'Kết quả vault',
    patternEn: 'Refs touched, counts, exit codes, hints and [redacted] markers, plus any command you need to run yourself.',
    patternVi: 'Các ref đã đụng tới, số lượng, mã thoát, hint và dấu [redacted], cùng các lệnh bạn cần tự chạy.',
    descEn: 'A write is confirmed by exit code, get (which prints [redacted]), search or list --json, never by revealing the value.',
    descVi: 'Việc ghi được xác nhận bằng mã thoát, get (in ra [redacted]), search hoặc list --json, không bao giờ bằng cách hiện giá trị.',
  },
};

export default data;
