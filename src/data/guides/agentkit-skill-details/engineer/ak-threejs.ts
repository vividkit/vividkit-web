import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-threejs",
  "command": "/ak:threejs",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:threejs — 3D Web Development",
    "titleVi": "/ak:threejs — Phát triển web 3D",
    "taglineEn": "Builds Three.js WebGL/WebGPU scenes, GLTF model loading, animation, physics, XR, particles, shaders, performance work, and project recommendations using 556 searchable examples.",
    "taglineVi": "Xây scene Three.js WebGL/WebGPU, nạp GLTF, animation, physics, XR, particle, shader, tối ưu hiệu năng và gợi ý dự án bằng 556 ví dụ có thể tìm kiếm."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Classify 3D need",
      "titleVi": "Phân loại nhu cầu 3D",
      "descEn": "Identify whether the task is a scene, game, visualization, model loader, animation, physics, XR, particle effect, shader, or optimization.",
      "descVi": "Xác định việc thuộc scene, game, visualization, nạp model, animation, physics, XR, particle effect, shader hay tối ưu."
    },
    {
      "number": 2,
      "titleEn": "Search examples",
      "titleVi": "Tìm ví dụ",
      "descEn": "Use the search script over examples, API, use-cases, or categories to find the closest working pattern.",
      "descVi": "Dùng script tìm kiếm trong examples, API, use-cases hoặc categories để tìm mẫu chạy gần nhất."
    },
    {
      "number": 3,
      "titleEn": "Choose references",
      "titleVi": "Chọn reference",
      "descEn": "Load fundamentals first, then loaders, textures, cameras, lights, animations, materials, interaction, controls, performance, shaders, physics, or WebGPU as needed.",
      "descVi": "Nạp fundamentals trước, rồi loaders, textures, cameras, lights, animations, materials, interaction, controls, performance, shaders, physics hoặc WebGPU theo nhu cầu."
    },
    {
      "number": 4,
      "titleEn": "Build scene core",
      "titleVi": "Dựng lõi scene",
      "descEn": "Create scene, camera, renderer, pixel ratio, canvas attachment, and a render loop before adding complexity.",
      "descVi": "Tạo scene, camera, renderer, pixel ratio, gắn canvas và render loop trước khi thêm phần phức tạp."
    },
    {
      "number": 5,
      "titleEn": "Add assets and systems",
      "titleVi": "Thêm asset và hệ thống",
      "descEn": "Load GLTF/FBX/OBJ models, lights, PBR materials, controls, picking, postprocessing, animation mixers, or physics systems.",
      "descVi": "Nạp model GLTF/FBX/OBJ, ánh sáng, vật liệu PBR, control, picking, postprocessing, animation mixer hoặc hệ physics."
    },
    {
      "number": 6,
      "titleEn": "Optimize rendering",
      "titleVi": "Tối ưu render",
      "descEn": "Use instancing, LOD, batching, texture strategy, WebGPU patterns, and shader references for high-performance scenes.",
      "descVi": "Dùng instancing, LOD, batching, chiến lược texture, mẫu WebGPU và reference shader để scene chạy hiệu năng cao."
    },
    {
      "number": 7,
      "titleEn": "Verify interaction",
      "titleVi": "Kiểm tương tác",
      "descEn": "Check controls, camera behavior, raycasting, XR affordances, loading states, and animation loop stability.",
      "descVi": "Kiểm control, hành vi camera, raycasting, affordance XR, trạng thái loading và độ ổn định animation loop."
    },
    {
      "number": 8,
      "titleEn": "Document external docs",
      "titleVi": "Gắn docs ngoài",
      "descEn": "Point to Three.js docs, examples, editor, or community resources when the implementation needs current API detail.",
      "descVi": "Trỏ tới docs, examples, editor hoặc cộng đồng Three.js khi triển khai cần chi tiết API mới."
    }
  ],
  "corePrinciplesEn": [
    "Start from a working example before inventing scene architecture",
    "Renderer, camera, and loop are the minimal spine",
    "Use GLTF/PBR/EnvMaps for product-quality models",
    "Performance work belongs in geometry, materials, textures, and draw-call strategy"
  ],
  "corePrinciplesVi": [
    "Bắt đầu từ ví dụ chạy được trước khi tự nghĩ kiến trúc scene",
    "Renderer, camera và loop là xương sống tối thiểu",
    "Dùng GLTF/PBR/EnvMaps cho model chất lượng sản phẩm",
    "Tối ưu hiệu năng nằm ở geometry, material, texture và chiến lược draw-call"
  ],
  "expertiseAreasEn": [
    "WebGL",
    "WebGPU",
    "GLTF loaders",
    "PBR materials",
    "physics",
    "WebXR",
    "shader work",
    "performance"
  ],
  "expertiseAreasVi": [
    "WebGL",
    "WebGPU",
    "nạp GLTF",
    "vật liệu PBR",
    "physics",
    "WebXR",
    "shader",
    "hiệu năng"
  ],
  "promptExamples": [
    {
      "labelEn": "Product configurator",
      "labelVi": "Cấu hình sản phẩm",
      "command": "/ak:threejs product configurator with GLTF model and PBR lighting",
      "whenEn": "A commerce or demo page needs a 3D model viewer.",
      "whenVi": "Trang commerce hoặc demo cần viewer model 3D.",
      "expectedEn": "Searches product-configurator examples and recommends loader, material, lighting, controls, and performance patterns.",
      "expectedVi": "Tìm ví dụ product configurator và gợi ý loader, material, ánh sáng, control và mẫu hiệu năng.",
      "recommended": true
    },
    {
      "labelEn": "Particle visualization",
      "labelVi": "Visualization particle",
      "command": "/ak:threejs particle compute webgpu visualization",
      "whenEn": "Large point sets or effects need GPU-friendly rendering.",
      "whenVi": "Tập điểm lớn hoặc hiệu ứng cần render thân thiện GPU.",
      "expectedEn": "Uses examples/categories for particles, compute, WebGPU, BufferGeometry, and shader strategy.",
      "expectedVi": "Dùng examples/categories cho particle, compute, WebGPU, BufferGeometry và chiến lược shader."
    },
    {
      "labelEn": "XR scene",
      "labelVi": "Scene XR",
      "command": "/ak:threejs WebXR room walkthrough with physics",
      "whenEn": "A VR/AR scene needs movement, collisions, and immersive controls.",
      "whenVi": "Một scene VR/AR cần di chuyển, va chạm và control nhập vai.",
      "expectedEn": "Loads WebXR and physics references and designs controls, lighting, assets, and verification checks.",
      "expectedVi": "Nạp reference WebXR và physics rồi thiết kế control, ánh sáng, asset và kiểm tra."
    }
  ],
  "skillStack": [
    {
      "name": "Three.js",
      "type": "tool"
    },
    {
      "name": "GLTFLoader",
      "type": "tool"
    },
    {
      "name": "WebGLRenderer",
      "type": "tool"
    },
    {
      "name": "WebGPU examples",
      "type": "tool"
    }
  ]
};

export default data;
