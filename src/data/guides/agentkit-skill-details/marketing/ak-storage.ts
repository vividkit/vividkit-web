import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-storage',
  command: '/ak:storage',
  kit: 'marketer',
  header: {
    titleEn: '/ak:storage — S3-compatible object storage',
    titleVi: '/ak:storage — Object storage tương thích S3',
    taglineEn: 'S3-compatible object storage helper for marketing assets across Cloudflare R2, AWS S3, MinIO, Backblaze B2, and DigitalOcean Spaces.',
    taglineVi: 'Trợ lý object storage tương thích S3 cho asset marketing trên Cloudflare R2, AWS S3, MinIO, Backblaze B2 và DigitalOcean Spaces.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'CREDENTIALS STAY PRIVATE',
    titleVi: 'GIỮ KÍN CREDENTIAL',
    contentEn: 'S3 credentials belong only in the user .env file, must never be logged or exposed, and should use least-privilege bucket-scoped tokens. If not configured or SDK is missing, operations fail gracefully instead of throwing.',
    contentVi: 'Credential S3 chỉ nằm trong file .env của người dùng, không bao giờ log hoặc tiết lộ, và nên dùng token giới hạn theo bucket. Nếu chưa cấu hình hoặc thiếu SDK, thao tác trả lỗi nhẹ nhàng thay vì throw.',
  },
  processFlow: [
    { number: 1, titleEn: 'Identify Operation', titleVi: 'Xác định thao tác', descEn: 'Decide whether the user needs upload, download, list, get public URL, delete, sync, or local-only fallback.', descVi: 'Xác định người dùng cần upload, download, list, lấy public URL, delete, sync hay fallback local-only.' },
    { number: 2, titleEn: 'Check Config', titleVi: 'Kiểm tra config', descEn: 'Look for S3_ENDPOINT, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, optional region, and public URL.', descVi: 'Kiểm tra S3_ENDPOINT, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, region tùy chọn và public URL.' },
    { number: 3, titleEn: 'Check SDK', titleVi: 'Kiểm tra SDK', descEn: 'Confirm @aws-sdk/client-s3 is installed; otherwise return configured fallback errors.', descVi: 'Xác nhận @aws-sdk/client-s3 đã cài; nếu chưa thì trả lỗi fallback đúng chuẩn.' },
    { number: 4, titleEn: 'Choose Provider', titleVi: 'Chọn provider', descEn: 'Map endpoint shape to Cloudflare R2, AWS S3, MinIO, Backblaze B2, DigitalOcean Spaces, or compatible storage.', descVi: 'Map endpoint sang Cloudflare R2, AWS S3, MinIO, Backblaze B2, DigitalOcean Spaces hoặc storage tương thích.' },
    { number: 5, titleEn: 'Run Client', titleVi: 'Chạy client', descEn: 'Use s3-client.cjs for upload, download, list, getPublicUrl, or remove operations.', descVi: 'Dùng s3-client.cjs cho thao tác upload, download, list, getPublicUrl hoặc remove.' },
    { number: 6, titleEn: 'Return URL or Path', titleVi: 'Trả URL hoặc path', descEn: 'Return public CDN URL when configured, provider URL when available, or local path only on fallback.', descVi: 'Trả CDN public URL nếu có cấu hình, provider URL nếu có, hoặc chỉ path local trong fallback.' },
    { number: 7, titleEn: 'Handle Failure', titleVi: 'Xử lý lỗi', descEn: 'When not configured, all operations return graceful errors and no exceptions are thrown.', descVi: 'Khi chưa cấu hình, mọi thao tác trả lỗi nhẹ nhàng và không throw exception.' },
  ],
  corePrinciplesEn: [
    'Marketing assets can use any S3-compatible backend as long as endpoint, bucket, keys, and region are configured.',
    'The skill returns shareable public URLs when S3_PUBLIC_URL or provider URLs are available.',
    'Fallback behavior is intentional: unconfigured storage should not break local asset workflows.',
    'Credentials are never displayed; use least-privilege bucket-scoped access tokens.',
  ],
  corePrinciplesVi: [
    'Asset marketing có thể dùng mọi backend tương thích S3 nếu endpoint, bucket, key và region được cấu hình.',
    'Skill trả URL public dễ chia sẻ khi có S3_PUBLIC_URL hoặc URL từ provider.',
    'Fallback là hành vi có chủ đích: storage chưa cấu hình không được làm hỏng workflow asset local.',
    'Credential không bao giờ được hiển thị; dùng access token giới hạn quyền theo bucket.',
  ],
  expertiseAreasEn: ['S3-compatible storage', 'Cloudflare R2', 'AWS S3', 'MinIO', 'Backblaze B2', 'DigitalOcean Spaces', 'Asset URLs', 'Graceful fallback'],
  expertiseAreasVi: ['Storage tương thích S3', 'Cloudflare R2', 'AWS S3', 'MinIO', 'Backblaze B2', 'DigitalOcean Spaces', 'URL asset', 'Fallback nhẹ nhàng'],
  workflowModes: [
    { flag: 'upload(localPath, remotePath, options)', modeEn: 'Client operation that reads a local marketing asset and sends PutObject when approved.', modeVi: 'Operation client đọc asset marketing local và gửi PutObject khi đã duyệt.', research: 'Config + path', redTeam: 'Secret exposure', validation: 'Upload result' },
    { flag: 'download(remotePath, localPath)', modeEn: 'Client operation that creates parent directories and writes downloaded bytes.', modeVi: 'Operation client tạo thư mục cha và ghi byte đã download.', research: 'Object key', redTeam: 'Wrong key', validation: 'Local file' },
    { flag: 'list(prefix, maxKeys)', modeEn: 'Client operation that sends ListObjectsV2 for a bounded prefix.', modeVi: 'Operation client gửi ListObjectsV2 cho prefix có giới hạn.', research: 'Prefix', redTeam: 'Overbroad list', validation: 'Object list' },
    { flag: 'remove(remotePath)', modeEn: 'Client operation that deletes exactly one approved key.', modeVi: 'Operation client xóa đúng một key đã được duyệt.', research: 'Object key', redTeam: 'Wrong deletion', validation: 'Remove result' },
    { flag: 'exists(remotePath)', modeEn: 'Client operation that sends HeadObject and returns an existence result.', modeVi: 'Operation client gửi HeadObject và trả kết quả tồn tại.', research: 'Object key', redTeam: 'Auth vs missing', validation: 'Existence result' },
    { flag: 'getPublicUrl(remotePath)', modeEn: 'Client operation that constructs a URL without sending a provider request.', modeVi: 'Operation client dựng URL mà không gửi request tới provider.', research: 'Public URL config', redTeam: 'Private bucket', validation: 'URL string' },
    { flag: 'sync(localFolder, remotePrefix, options)', modeEn: 'Client operation that scans a local folder; dry run previews file-to-object mapping without upload.', modeVi: 'Operation client scan folder local; dry run preview mapping file-sang-object mà không upload.', research: 'Folder mapping', redTeam: 'Unexpected writes', validation: 'Dry-run mapping' },
  ],
  promptExamples: [
    { labelEn: 'Upload asset', labelVi: 'Upload asset', command: '/ak:storage "Upload assets/images/launch-hero.png to campaign/launch/hero.png only after approval; return the URL if configured"', whenEn: 'You need a generated marketing asset hosted remotely.', whenVi: 'Khi cần host remote một asset marketing đã tạo.', expectedEn: 'Upload result with URL if configured or graceful fallback error.', expectedVi: 'Kết quả upload kèm URL nếu cấu hình hoặc lỗi fallback nhẹ nhàng.', recommended: true },
    { labelEn: 'List folder', labelVi: 'Liệt kê thư mục', command: '/ak:storage "List approved remote keys under designs/ without deleting or uploading anything"', whenEn: 'You need to inspect remote asset keys under a prefix.', whenVi: 'Khi cần xem các object key remote dưới một prefix.', expectedEn: 'Object list from the bucket or fallback status.', expectedVi: 'Danh sách object trong bucket hoặc trạng thái fallback.' },
    { labelEn: 'Public URL', labelVi: 'URL public', command: '/ak:storage "Construct the public URL for designs/pricing-deck.html without making a provider request"', whenEn: 'You need a shareable URL for an already uploaded asset.', whenVi: 'Khi cần URL chia sẻ cho asset đã upload.', expectedEn: 'Public URL using custom domain or provider URL.', expectedVi: 'URL public dùng custom domain hoặc URL provider.' },
    { labelEn: 'Sync assets', labelVi: 'Sync asset', command: '/ak:storage "Preview syncing assets/slides/ to slides/ as a dry run; show every object key and wait before upload"', whenEn: 'You want a local asset folder mirrored to remote storage.', whenVi: 'Khi muốn mirror một thư mục asset local lên remote storage.', expectedEn: 'Dry-run sync mapping or explicit approval boundary before uploads.', expectedVi: 'Mapping dry-run sync hoặc ranh giới duyệt rõ trước khi upload.' },
  ],
};

export default data;
