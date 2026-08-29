import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-shader",
  "command": "/ak:shader",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:shader",
    "titleVi": "/ak:shader",
    "taglineEn": "Author GLSL fragment shaders for procedural textures, SDF shapes, gradients, noise, fBm, tiling, animation, WebGL, Three.js, and generative effects.",
    "taglineVi": "Viết GLSL fragment shader cho texture thủ tục, hình SDF, gradient, noise, fBm, tiling, animation, WebGL, Three.js và hiệu ứng tạo sinh."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Frame the effect",
      "titleVi": "Định hình hiệu ứng",
      "descEn": "Identify whether the request is a texture, SDF shape, pattern, noise field, animation, WebGL effect, or Three.js shader.",
      "descVi": "Xác định yêu cầu là texture, hình SDF, pattern, trường noise, animation, hiệu ứng WebGL hay shader Three.js."
    },
    {
      "number": 2,
      "titleEn": "Set uniforms",
      "titleVi": "Đặt uniform",
      "descEn": "Use standard uniforms for time, resolution, and mouse input; map ShaderToy names when needed.",
      "descVi": "Dùng uniform chuẩn cho thời gian, độ phân giải và chuột; ánh xạ tên ShaderToy khi cần."
    },
    {
      "number": 3,
      "titleEn": "Normalize coordinates",
      "titleVi": "Chuẩn hóa tọa độ",
      "descEn": "Convert gl_FragCoord into normalized `st`, correct aspect ratio when necessary, and keep pixel threads stateless.",
      "descVi": "Chuyển gl_FragCoord thành `st` chuẩn hóa, chỉnh tỉ lệ khung khi cần và giữ từng pixel thread không trạng thái."
    },
    {
      "number": 4,
      "titleEn": "Build primitives",
      "titleVi": "Dựng primitive",
      "descEn": "Compose shapes with distance, length, step, smoothstep, atan, dot, normalize, mix, clamp, fract, and mod.",
      "descVi": "Ghép hình bằng distance, length, step, smoothstep, atan, dot, normalize, mix, clamp, fract và mod."
    },
    {
      "number": 5,
      "titleEn": "Layer pattern and noise",
      "titleVi": "Xếp pattern và noise",
      "descEn": "Add tiling, matrices, symmetry, domain warping, Perlin/simplex/cellular noise, Voronoi, or fBm for procedural richness.",
      "descVi": "Thêm tiling, ma trận, đối xứng, domain warping, noise Perlin/simplex/cellular, Voronoi hoặc fBm để tăng độ phong phú thủ tục."
    },
    {
      "number": 6,
      "titleEn": "Color and animate",
      "titleVi": "Tô màu và tạo chuyển động",
      "descEn": "Use RGB/HSB gradients, mix curves, sine waves, u_time, and smooth thresholds for motion and visual polish.",
      "descVi": "Dùng gradient RGB/HSB, đường mix, sóng sine, u_time và ngưỡng smooth để tạo chuyển động và độ mượt hình ảnh."
    },
    {
      "number": 7,
      "titleEn": "Test in viewer",
      "titleVi": "Thử trong viewer",
      "descEn": "Run or paste into The Book of Shaders editor, glslViewer, glslCanvas, ShaderToy, WebGL, or Three.js context.",
      "descVi": "Chạy hoặc dán vào The Book of Shaders editor, glslViewer, glslCanvas, ShaderToy, WebGL hoặc ngữ cảnh Three.js."
    }
  ],
  "corePrinciplesEn": [
    "Fragment shaders run the same program independently for every pixel",
    "Coordinates and aspect ratio decide most visual correctness",
    "Smooth thresholds beat jagged hard edges for polished procedural graphics",
    "Layer primitives, patterns, and noise instead of hardcoding pixels"
  ],
  "corePrinciplesVi": [
    "Fragment shader chạy cùng một chương trình độc lập cho từng pixel",
    "Tọa độ và tỉ lệ khung quyết định phần lớn độ đúng của hình",
    "Ngưỡng smooth cho đồ họa thủ tục mượt hơn cạnh cứng lởm chởm",
    "Hãy xếp lớp primitive, pattern và noise thay vì hardcode pixel"
  ],
  "expertiseAreasEn": [
    "SDF circles, rectangles, polygons, and stars",
    "RGB/HSB gradients",
    "Tiling and transforms",
    "Perlin, simplex, cellular, and Voronoi noise",
    "fBm and turbulence",
    "ShaderToy and WebGL uniforms"
  ],
  "expertiseAreasVi": [
    "SDF cho circle, rectangle, polygon và star",
    "Gradient RGB/HSB",
    "Tiling và transform",
    "Noise Perlin, simplex, cellular và Voronoi",
    "fBm và turbulence",
    "Uniform của ShaderToy và WebGL"
  ],
  "skillStack": [
    {
      "name": "GLSL",
      "type": "tool"
    },
    {
      "name": "WebGL",
      "type": "tool"
    },
    {
      "name": "Three.js",
      "type": "tool"
    },
    {
      "name": "ShaderToy",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Procedural texture",
      "labelVi": "Texture thủ tục",
      "command": "/ak:shader marble texture with slow flowing veins",
      "whenEn": "Use for formula-driven textures such as marble, wood, clouds, or terrain.",
      "whenVi": "Dùng cho texture dựa trên công thức như marble, gỗ, mây hoặc địa hình.",
      "expectedEn": "GLSL using normalized coordinates, noise or fBm, color gradients, and time controls.",
      "expectedVi": "GLSL dùng tọa độ chuẩn hóa, noise hoặc fBm, gradient màu và điều khiển thời gian.",
      "recommended": true
    },
    {
      "labelEn": "SDF visual",
      "labelVi": "Hình SDF",
      "command": "/ak:shader pulsing neon circle field",
      "whenEn": "Use when the visual is built from distance-field shapes and animation.",
      "whenVi": "Dùng khi hình ảnh được dựng từ SDF và animation.",
      "expectedEn": "Shape primitives with smoothstep edges, time-based motion, and composited color.",
      "expectedVi": "Primitive hình với cạnh smoothstep, chuyển động theo thời gian và màu được compose."
    },
    {
      "labelEn": "Three.js effect",
      "labelVi": "Hiệu ứng Three.js",
      "command": "/ak:shader fragment shader for a Three.js hologram material",
      "whenEn": "Use for custom material effects in WebGL or Three.js.",
      "whenVi": "Dùng cho hiệu ứng material tùy biến trong WebGL hoặc Three.js.",
      "expectedEn": "A shader structure with uniforms and fragment color logic ready to integrate.",
      "expectedVi": "Cấu trúc shader có uniform và logic màu fragment sẵn để tích hợp."
    }
  ]
};

export default data;
