import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-threejs",
  "command": "/ak:threejs",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:threejs",
    "titleVi": "/ak:threejs",
    "taglineEn": "Builds Three.js WebGL/WebGPU scenes with models, animation, physics, XR, particles, shaders, optimization, 556 searchable examples, 60 API classes, and 20 use-case templates.",
    "taglineVi": "Xây scene Three.js WebGL/WebGPU với model, animation, physics, XR, particle, shader, tối ưu, 556 ví dụ có thể tìm kiếm, 60 API class và 20 template use case."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Scope browser 3D",
      "titleVi": "Chốt phạm vi 3D browser",
      "descEn": "Confirm the request is a 3D scene, game, visualization, model loader, animation, physics, XR, particle effect, shader, or rendering-performance task.",
      "descVi": "Xác nhận yêu cầu là scene 3D, game, visualization, nạp model, animation, physics, XR, particle effect, shader hoặc tối ưu hiệu năng render."
    },
    {
      "number": 2,
      "titleEn": "Search packaged references",
      "titleVi": "Tìm reference đóng gói",
      "descEn": "Use `python3 scripts/search.py` across examples, API, use-cases, or categories to find relevant patterns before inventing scene architecture.",
      "descVi": "Dùng `python3 scripts/search.py` trong examples, API, use-cases hoặc categories để tìm pattern phù hợp trước khi tự nghĩ kiến trúc scene."
    },
    {
      "number": 3,
      "titleEn": "Select reference level",
      "titleVi": "Chọn cấp reference",
      "descEn": "Load fundamentals first, then loaders, textures, cameras, lights, animations, geometry, materials, interaction, controls, performance, shaders, physics, XR, or WebGPU as needed.",
      "descVi": "Nạp fundamentals trước, rồi loaders, textures, cameras, lights, animations, geometry, materials, interaction, controls, performance, shaders, physics, XR hoặc WebGPU khi cần."
    },
    {
      "number": 4,
      "titleEn": "Build minimum scene",
      "titleVi": "Dựng scene tối thiểu",
      "descEn": "Create scene, camera, renderer, canvas attachment, pixel ratio, lighting, model loading when needed, and an animation loop before adding effects.",
      "descVi": "Tạo scene, camera, renderer, gắn canvas, pixel ratio, ánh sáng, nạp model khi cần và animation loop trước khi thêm hiệu ứng."
    },
    {
      "number": 5,
      "titleEn": "Add content and interaction",
      "titleVi": "Thêm nội dung và tương tác",
      "descEn": "Add GLTF/FBX/OBJ assets, textures, PBR materials, controls, raycasting, postprocessing, AnimationMixer, physics, XR, or WebGPU systems.",
      "descVi": "Thêm asset GLTF/FBX/OBJ, texture, vật liệu PBR, control, raycasting, postprocessing, AnimationMixer, physics, XR hoặc hệ WebGPU."
    },
    {
      "number": 6,
      "titleEn": "Optimize from references",
      "titleVi": "Tối ưu theo reference",
      "descEn": "Use performance references for instancing, LOD, batching, geometry, material, texture, shader, and WebGPU compute choices.",
      "descVi": "Dùng reference hiệu năng cho lựa chọn instancing, LOD, batching, geometry, material, texture, shader và WebGPU compute."
    },
    {
      "number": 7,
      "titleEn": "Verify runtime behavior",
      "titleVi": "Xác minh hành vi runtime",
      "descEn": "Check camera framing, controls, asset loading, animation loop stability, resize behavior, WebXR/WebGPU support, and fallback states.",
      "descVi": "Kiểm camera framing, control, việc nạp asset, độ ổn định animation loop, resize, hỗ trợ WebXR/WebGPU và trạng thái fallback."
    },
    {
      "number": 8,
      "titleEn": "Point to live resources",
      "titleVi": "Trỏ tới nguồn live",
      "descEn": "Use official Three.js docs, examples, editor, or community resources when current API details are needed beyond packaged guidance.",
      "descVi": "Dùng docs, examples, editor hoặc cộng đồng Three.js chính thức khi cần chi tiết API hiện tại ngoài guidance đóng gói."
    }
  ],
  "corePrinciplesEn": [
    "Start from searchable examples and progressive references before inventing scene architecture",
    "Scene, camera, renderer, canvas attachment, lighting, and loop are the minimal spine",
    "Use GLTF/PBR/textures/EnvMaps and correct loaders for production model workflows",
    "Optimize with instancing, LOD, batching, geometry, materials, textures, shaders, and WebGPU only after the scene behavior is clear"
  ],
  "corePrinciplesVi": [
    "Bắt đầu từ ví dụ có thể tìm kiếm và reference theo cấp trước khi tự nghĩ kiến trúc scene",
    "Scene, camera, renderer, gắn canvas, lighting và loop là xương sống tối thiểu",
    "Dùng GLTF/PBR/texture/EnvMap và loader đúng cho workflow model production",
    "Tối ưu bằng instancing, LOD, batching, geometry, material, texture, shader và WebGPU chỉ sau khi hành vi scene đã rõ"
  ],
  "expertiseAreasEn": [
    "WebGL and WebGPU scenes",
    "GLTF, FBX, and OBJ model loading",
    "PBR materials, textures, lights, and shadows",
    "AnimationMixer, controls, raycasting, and postprocessing",
    "Physics and WebXR experiences",
    "Particles, custom GLSL shaders, and render performance"
  ],
  "expertiseAreasVi": [
    "Scene WebGL và WebGPU",
    "Nạp model GLTF, FBX và OBJ",
    "Vật liệu PBR, texture, light và shadow",
    "AnimationMixer, control, raycasting và postprocessing",
    "Physics và trải nghiệm WebXR",
    "Particle, custom GLSL shader và hiệu năng render"
  ],
  "promptExamples": [
    {
      "labelEn": "Accessible product viewer",
      "labelVi": "Viewer sản phẩm accessible",
      "command": "/ak:threejs accessible GLTF product viewer with OrbitControls, PBR lighting, loading and error states, and WebGL fallback",
      "whenEn": "Use when a commerce or demo page needs a browser 3D model viewer with clear loading, controls, and fallback behavior.",
      "whenVi": "Dùng khi trang commerce hoặc demo cần viewer model 3D trên browser với loading, control và fallback rõ ràng.",
      "expectedEn": "Searches packaged product-configurator and loader references, then maps scene, camera, renderer, GLTFLoader, PBR materials, controls, fallback, and verification steps.",
      "expectedVi": "Tìm reference product configurator và loader đóng gói, rồi ánh xạ scene, camera, renderer, GLTFLoader, material PBR, control, fallback và bước xác minh.",
      "recommended": true
    },
    {
      "labelEn": "WebGPU particles",
      "labelVi": "Particle WebGPU",
      "command": "/ak:threejs particle compute WebGPU visualization for a large point cloud",
      "whenEn": "Use when large point sets or effects need Three.js particle patterns, compute-oriented references, or GPU-friendly rendering.",
      "whenVi": "Dùng khi tập điểm lớn hoặc hiệu ứng cần pattern particle Three.js, reference hướng compute hoặc render thân thiện GPU.",
      "expectedEn": "Uses example/category search for particles and WebGPU, then selects BufferGeometry, shader, compute, fallback, and performance patterns appropriate to the installed runtime.",
      "expectedVi": "Dùng search example/category cho particle và WebGPU, rồi chọn pattern BufferGeometry, shader, compute, fallback và hiệu năng phù hợp runtime đã cài."
    },
    {
      "labelEn": "XR scene with physics",
      "labelVi": "Scene XR có physics",
      "command": "/ak:threejs WebXR room walkthrough with physics collisions and controller interactions",
      "whenEn": "Use when a VR or AR browser scene needs immersive movement, collisions, controller input, or capability fallback.",
      "whenVi": "Dùng khi scene VR hoặc AR trên browser cần di chuyển nhập vai, va chạm, input controller hoặc fallback theo capability.",
      "expectedEn": "Loads physics and WebXR references, then outlines assets, lights, controls, collision boundaries, browser support checks, fallback states, and runtime verification evidence.",
      "expectedVi": "Nạp reference physics và WebXR, rồi phác thảo asset, ánh sáng, control, ranh giới va chạm, kiểm tra hỗ trợ browser, fallback và bằng chứng xác minh runtime."
    },
    {
      "labelEn": "API/example search",
      "labelVi": "Tìm API/example",
      "command": "/ak:threejs search PerspectiveCamera API and webgl postprocessing examples for depth of field",
      "whenEn": "Use when you need local packaged Three.js examples, API summaries, categories, or use-case recommendations before coding.",
      "whenVi": "Dùng khi bạn cần example Three.js đóng gói local, tóm tắt API, category hoặc gợi ý use case trước khi code.",
      "expectedEn": "Runs the local search workflow conceptually across examples, API, use-cases, or categories, then reports the closest packaged references and how to adapt them.",
      "expectedVi": "Áp dụng workflow search local trong examples, API, use-cases hoặc categories, rồi báo reference đóng gói gần nhất và cách điều chỉnh."
    }
  ],
  "skillStack": [
    {
      "name": "Three.js",
      "type": "tool"
    },
    {
      "name": "scripts/search.py",
      "type": "tool"
    },
    {
      "name": "GLTFLoader",
      "type": "tool"
    },
    {
      "name": "WebGLRenderer",
      "type": "tool"
    }
  ]
};

export default data;
