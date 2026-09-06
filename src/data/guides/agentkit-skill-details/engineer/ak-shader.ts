import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-shader",
  "command": "/ak:shader",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:shader — GLSL fragment shaders",
    "titleVi": "/ak:shader — Shader GLSL",
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
      "name": "The Book of Shaders editor",
      "type": "tool"
    },
    {
      "name": "glslViewer",
      "type": "tool"
    },
    {
      "name": "glslCanvas",
      "type": "tool"
    },
    {
      "name": "ShaderToy",
      "type": "tool"
    }
  ],
  "invocation": {
    "syntax": "/ak:shader [effect or pattern]",
    "arguments": [
      {
        "token": "[effect or pattern]",
        "titleEn": "Effect or pattern",
        "titleVi": "Hiệu ứng hoặc pattern",
        "descEn": "Natural-language shader brief describing the visual outcome plus the host graphics contract: GLSL/WebGL version, uniforms, coordinate conventions, material or texture inputs, motion, performance boundary, fallback needs, and required compile or render evidence. The Skill declares no fixed flags or output path.",
        "descVi": "Brief shader bằng ngôn ngữ tự nhiên mô tả kết quả hình ảnh cùng hợp đồng graphics của host: version GLSL/WebGL, uniform, quy ước tọa độ, material hoặc texture input, chuyển động, giới hạn hiệu năng, nhu cầu fallback và bằng chứng compile hoặc render bắt buộc. Skill không khai báo flag hoặc output path cố định.",
        "required": true,
        "exampleCommand": "/ak:shader \"Create a WebGL 1 fragment shader for a subtle animated marble background using the project's u_time and u_resolution uniforms. Keep motion slow, preserve text contrast, add a reduced-motion static path, and verify it in the existing preview without adding dependencies.\""
      }
    ]
  },
  "promptExamples": [
    {
      "labelEn": "Procedural texture",
      "labelVi": "Texture thủ tục",
      "command": "/ak:shader animated marble texture with slow flowing veins",
      "whenEn": "Use when you need GLSL for a formula-driven texture such as marble, wood, clouds, or terrain.",
      "whenVi": "Dùng khi bạn cần GLSL cho texture dựa trên công thức như marble, gỗ, mây hoặc địa hình.",
      "expectedEn": "Returns fragment-shader logic built from normalized coordinates, noise or fBm, gradients, u_time animation, and a gl_FragColor output.",
      "expectedVi": "Trả về logic fragment shader dựng từ tọa độ chuẩn hóa, noise hoặc fBm, gradient, animation u_time và đầu ra gl_FragColor.",
      "recommended": true
    },
    {
      "labelEn": "SDF shape",
      "labelVi": "Hình SDF",
      "command": "/ak:shader pulsing neon circle field with smooth edges",
      "whenEn": "Use when the visual should be drawn from distance-field shapes rather than image assets.",
      "whenVi": "Dùng khi hình ảnh nên được vẽ từ shape theo distance field thay vì asset ảnh.",
      "expectedEn": "Produces GLSL that measures pixel distance, applies step or smoothstep thresholds, layers color with mix, and animates each pixel statelessly.",
      "expectedVi": "Tạo GLSL đo khoảng cách pixel, áp dụng ngưỡng step hoặc smoothstep, xếp lớp màu bằng mix và animate từng pixel không trạng thái."
    },
    {
      "labelEn": "ShaderToy-style effect",
      "labelVi": "Hiệu ứng kiểu ShaderToy",
      "command": "/ak:shader ShaderToy-style cellular Voronoi energy field",
      "whenEn": "Use for procedural WebGL effects that depend on time, resolution, or mouse-style uniforms.",
      "whenVi": "Dùng cho hiệu ứng WebGL thủ tục phụ thuộc vào uniform kiểu thời gian, độ phân giải hoặc chuột.",
      "expectedEn": "Outlines the standard uniforms, normalizes gl_FragCoord, combines cellular or Voronoi noise with color shaping, and notes ShaderToy uniform mapping.",
      "expectedVi": "Nêu các uniform chuẩn, chuẩn hóa gl_FragCoord, kết hợp cellular hoặc Voronoi noise với tạo màu và ghi chú ánh xạ uniform ShaderToy."
    },
    {
      "labelEn": "Three.js material",
      "labelVi": "Material Three.js",
      "command": "/ak:shader fragment shader for a Three.js hologram material",
      "whenEn": "Use when integrating a custom fragment shader into a Three.js or WebGL material.",
      "whenVi": "Dùng khi tích hợp fragment shader tùy chỉnh vào material Three.js hoặc WebGL.",
      "expectedEn": "Provides shader code and integration-minded uniform choices for resolution, elapsed time, and optional mouse input, ready to adapt inside a material.",
      "expectedVi": "Cung cấp mã shader và lựa chọn uniform hướng tích hợp cho độ phân giải, thời gian trôi qua và chuột tùy chọn, sẵn để đưa vào material."
    }
  ]
};

export default data;
