import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-media-processing',
  command: '/ak:media-processing',
  kit: 'engineer',
  header: { titleEn: '/ak:media-processing — Process video, audio, and images', titleVi: '/ak:media-processing — Xử lý video, audio và ảnh', taglineEn: 'Process video, audio, images, thumbnails, streams, GIFs, and AI background removal with the right CLI for the media job.', taglineVi: 'Xử lý video, audio, ảnh, thumbnail, streaming, GIF và tách nền AI bằng đúng công cụ CLI cho từng loại media.' },
  processFlow: [
    { number: 1, titleEn: 'Classify media task', titleVi: 'Phân loại tác vụ', descEn: 'Decide whether the job is video, audio, still image, batch image, thumbnail, GIF, streaming, or background removal.', descVi: 'Xác định việc thuộc video, audio, ảnh tĩnh, ảnh hàng loạt, thumbnail, GIF, streaming hay tách nền.' },
    { number: 2, titleEn: 'Select tool', titleVi: 'Chọn công cụ', descEn: 'Use FFmpeg for video/audio/streams/thumbnails, ImageMagick for images/batch effects, and RMBG for local AI cutouts.', descVi: 'Dùng FFmpeg cho video/audio/stream/thumbnail, ImageMagick cho ảnh và batch, RMBG cho tách nền AI cục bộ.' },
    { number: 3, titleEn: 'Check installation', titleVi: 'Kiểm tra cài đặt', descEn: 'Verify ffmpeg, magick, and rmbg before promising conversion or background-removal output.', descVi: 'Kiểm tra ffmpeg, magick và rmbg trước khi hứa có output chuyển đổi hoặc tách nền.' },
    { number: 4, titleEn: 'Pick parameters', titleVi: 'Chọn tham số', descEn: 'Choose codecs, CRF, preset, audio codec, resize geometry, quality, metadata strip, or RMBG model based on output goal.', descVi: 'Chọn codec, CRF, preset, codec audio, kích thước resize, chất lượng, bỏ metadata hoặc model RMBG theo mục tiêu output.' },
    { number: 5, titleEn: 'Run conversion', titleVi: 'Chạy xử lý', descEn: 'Apply the command for copy/remux, re-encode, extract audio, resize, batch resize, thumbnail, GIF, stream, or cutout.', descVi: 'Chạy lệnh remux, re-encode, tách audio, resize, resize hàng loạt, tạo thumbnail, GIF, stream hoặc tách nền.' },
    { number: 6, titleEn: 'Organize outputs', titleVi: 'Sắp xếp output', descEn: 'Invoke project-organization guidance so generated files land in a predictable project location.', descVi: 'Áp dụng hướng dẫn project-organization để file tạo ra nằm đúng vị trí dễ quản lý trong project.' },
    { number: 7, titleEn: 'Inspect quality', titleVi: 'Kiểm tra chất lượng', descEn: 'Confirm format compatibility, file size, dimensions, playback, alpha channel, and visual/audio quality.', descVi: 'Kiểm tra tương thích định dạng, dung lượng, kích thước, khả năng phát, kênh alpha và chất lượng hình/âm.' },
    { number: 8, titleEn: 'Troubleshoot', titleVi: 'Gỡ lỗi', descEn: 'Use the reference guides for encoding, streaming, filters, batch processing, model choice, and performance errors.', descVi: 'Dùng các guide tham chiếu cho encoding, streaming, filter, xử lý hàng loạt, chọn model và lỗi hiệu năng.' },
  ],
  corePrinciplesEn: ['Match the tool to the media type', 'Prefer stream copy when remuxing is enough', 'Tune quality with explicit codec and size targets', 'Keep generated assets organized and reviewable'],
  corePrinciplesVi: ['Chọn công cụ đúng theo loại media', 'Ưu tiên copy stream khi chỉ cần đổi container', 'Chỉnh chất lượng bằng codec và mục tiêu dung lượng rõ ràng', 'Giữ asset sinh ra có tổ chức và dễ review'],
  expertiseAreasEn: ['FFmpeg encoding and filters', 'Audio extraction and conversion', 'ImageMagick resize/effects', 'Batch media processing', 'RMBG background removal', 'HLS/DASH streaming'],
  expertiseAreasVi: ['Encoding và filter FFmpeg', 'Tách và chuyển đổi audio', 'Resize/effect bằng ImageMagick', 'Xử lý media hàng loạt', 'Tách nền bằng RMBG', 'Streaming HLS/DASH'],
  promptExamples: [
    { labelEn: 'Video optimize', labelVi: 'Tối ưu video', command: '/ak:media-processing demo.mov convert to web MP4', whenEn: 'Use when a video needs codec, size, or compatibility changes.', whenVi: 'Dùng khi video cần đổi codec, giảm dung lượng hoặc tăng tương thích.', expectedEn: 'FFmpeg-based conversion plan with quality parameters.', expectedVi: 'Hướng xử lý bằng FFmpeg kèm tham số chất lượng.', recommended: true },
    { labelEn: 'Image batch', labelVi: 'Ảnh hàng loạt', command: '/ak:media-processing product-images resize for web', whenEn: 'Use when many images need the same dimensions or quality treatment.', whenVi: 'Dùng khi nhiều ảnh cần cùng kích thước hoặc mức chất lượng.', expectedEn: 'ImageMagick batch workflow and organized output path.', expectedVi: 'Workflow ImageMagick hàng loạt và vị trí output rõ ràng.' },
    { labelEn: 'Background removal', labelVi: 'Tách nền', command: '/ak:media-processing hero-photo.jpg remove background high quality', whenEn: 'Use when a local AI cutout is needed.', whenVi: 'Dùng khi cần tách nền ảnh bằng AI cục bộ.', expectedEn: 'RMBG model selection and transparent PNG output guidance.', expectedVi: 'Chọn model RMBG và hướng tạo PNG nền trong suốt.' },
  ],
  skillStack: [{ name: 'FFmpeg', type: 'tool' }, { name: 'ImageMagick', type: 'tool' }, { name: 'RMBG CLI', type: 'tool' }, { name: 'ak:project-organization', type: 'skill' }],
  reportOutput: { titleEn: 'Media Output', titleVi: 'Output media', patternEn: 'Converted media files plus command rationale', patternVi: 'File media đã xử lý kèm lý do chọn lệnh', descEn: 'Output should name the chosen tool, key parameters, generated files, and any compatibility or quality tradeoffs.', descVi: 'Kết quả nên nêu công cụ đã chọn, tham số chính, file được tạo và các đánh đổi về tương thích hoặc chất lượng.' },
};

export default data;
