import type { SkillInfographic, SkillSubcommand } from '@/data/guides/how-ck-works';

// Beta-only skill: authored from the beta SKILL.md and the beta marketing ak-docs page.
const stage = (
  name: string,
  titleEn: string,
  titleVi: string,
  descEn: string,
  descVi: string,
  outcomeEn: string,
  outcomeVi: string,
): SkillSubcommand => ({
  name,
  syntax: `/ak:filmmaking ${name} [brief-or-project]`,
  titleEn,
  titleVi,
  descEn,
  descVi,
  outcomeEn,
  outcomeVi,
});

const data: SkillInfographic = {
  id: 'ak-filmmaking',
  command: '/ak:filmmaking',
  kit: 'marketer',
  header: {
    titleEn: '/ak:filmmaking — Long-form AI films',
    titleVi: '/ak:filmmaking — Phim AI dài',
    taglineEn:
      'Direct a 5–30 minute AI film as a production pipeline instead of one long generation: a films/<slug>/ production graph keeps characters, scenes, shots, dialogue timing, sound stems and cost in one place, so any single shot can be regenerated without touching the rest of the film.',
    taglineVi:
      'Đạo diễn một phim AI dài 5–30 phút theo dây chuyền sản xuất thay vì một lần tạo dài: production graph trong films/<slug>/ giữ nhân vật, cảnh, shot, timing thoại, stem âm thanh và chi phí ở một chỗ, nên có thể tạo lại riêng một shot mà không đụng tới phần còn lại của phim.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'A film brief does not authorize provider spend',
    titleVi: 'Brief phim không đồng nghĩa được phép tốn tiền provider',
    contentEn:
      'Generation, voice, lipsync and music requests go to the providers behind your installed skills, and every retry is another paid request. Spending beyond the agreed budget mode, promoting a new canonical character reference, and publishing anything all need your approval. Confirm rights and consent for every likeness, voice, reference image and piece of music before generation.',
    contentVi:
      'Yêu cầu tạo hình, giọng, lipsync và nhạc đi tới các provider đứng sau skill bạn đã cài, và mỗi lần thử lại là thêm một request tính phí. Chi vượt mức budget đã thống nhất, đổi ảnh tham chiếu chuẩn của nhân vật, và đăng bất cứ thứ gì đều cần bạn duyệt. Xác nhận quyền và sự đồng ý cho mọi khuôn mặt, giọng nói, ảnh tham chiếu và bản nhạc trước khi tạo.',
  },
  processFlow: [
    { number: 1, titleEn: 'Script and break down', titleVi: 'Viết kịch bản và chia shot', descEn: 'film.py init creates the production graph with a budget mode (low, balanced or quality). Then the screenplay and beat sheet are written, and scenes are split into shots of 3–10 s, each with a render class and a link to the shot it continues from.', descVi: 'film.py init tạo production graph với một mức budget (low, balanced hoặc quality). Sau đó viết kịch bản và beat sheet, rồi chia cảnh thành các shot 3–10 giây, mỗi shot có render class và liên kết tới shot mà nó nối tiếp.' },
    { number: 2, titleEn: 'Build character bibles', titleVi: 'Dựng hồ sơ nhân vật', descEn: 'Characters, wardrobe, locations and props get reference packs grown from one approved front image. You approve the canonical identities that every later shot uses.', descVi: 'Nhân vật, trang phục, bối cảnh và đạo cụ có bộ ảnh tham chiếu dựng ra từ một ảnh chính diện đã duyệt. Bạn duyệt các nhận dạng chuẩn mà mọi shot về sau sẽ dùng.' },
    { number: 3, titleEn: 'Record audio first', titleVi: 'Làm audio trước', descEn: 'The dialogue master and its forced alignment exist before any lipsync-dependent shot is generated. Dialogue, effects, ambience and music stay as separate stems.', descVi: 'Bản thoại master và forced alignment phải có trước khi tạo bất kỳ shot nào cần lipsync. Thoại, hiệu ứng, âm nền và nhạc luôn là các stem riêng.' },
    { number: 4, titleEn: 'Storyboard, then animatic', titleVi: 'Storyboard rồi animatic', descEn: 'Storyboard stills and keyframes are approved, then a full-length animatic on the dialogue master is the cost-control gate. You sign it off before any expensive video generation starts.', descVi: 'Duyệt ảnh storyboard và keyframe, rồi một animatic đủ thời lượng trên bản thoại master làm cổng kiểm soát chi phí. Bạn duyệt nó trước khi bắt đầu tạo video tốn kém.' },
    { number: 5, titleEn: 'Render and QC shot by shot', titleVi: 'Render và QC từng shot', descEn: 'Each shot is routed to a model tier by its render class and the budget mode. QC records timestamped failures, and a failed shot returns to the cheapest stage that fixes it, never a scene or film re-render.', descVi: 'Mỗi shot được chọn mức model theo render class và mức budget. QC ghi lỗi kèm mốc thời gian, và shot hỏng quay về bước rẻ nhất sửa được nó, không bao giờ render lại cả cảnh hay cả phim.' },
    { number: 6, titleEn: 'Assemble the final cut', titleVi: 'Dựng bản cuối', descEn: 'The final timeline lays the dialogue master and mixes the separate stems. It never uses the audio a video generator produced, and timeline --mode final must report no blockers.', descVi: 'Timeline cuối đặt bản thoại master và mix các stem riêng. Không bao giờ dùng audio do model tạo video sinh ra, và timeline --mode final phải không còn blocker nào.' },
  ],
  corePrinciplesEn: [
    'Continuity lives in the production graph, not in prose or memory; an intended change is declared on the shot with a reason.',
    'Identity comes from canonical reference packs; a newly generated frame never conditions a shot until you promote it.',
    'Model choices and prices come from live provider evidence recorded with its source, never from remembered figures.',
    'If the film does not work as an animatic, fix story and timing; a more expensive video model will not save it.',
  ],
  corePrinciplesVi: [
    'Sự liền mạch nằm trong production graph, không nằm trong mô tả hay trí nhớ; thay đổi có chủ ý được khai trên shot kèm lý do.',
    'Nhận dạng nhân vật lấy từ bộ ảnh tham chiếu chuẩn; frame mới tạo không được dùng làm điều kiện cho shot nào cho tới khi bạn duyệt nâng nó lên.',
    'Lựa chọn model và giá lấy từ bằng chứng hiện tại của provider, có ghi nguồn, không dựa vào con số nhớ được.',
    'Nếu phim không ổn ở dạng animatic thì sửa câu chuyện và nhịp; model video đắt hơn cũng không cứu được.',
  ],
  invocation: {
    syntax: '/ak:filmmaking [create|script|breakdown|bible|storyboard|animatic|render|audio|qc|assemble] [brief-or-project]',
    arguments: [
      {
        token: '[brief-or-project]',
        titleEn: 'Brief or project',
        titleVi: 'Brief hoặc project',
        descEn: 'A film brief (story, length, budget mode, aspect, where to stop) for create, or an existing films/<slug>/ project for a single stage.',
        descVi: 'Brief phim (câu chuyện, thời lượng, mức budget, tỉ lệ khung, điểm dừng) cho create, hoặc một project films/<slug>/ có sẵn khi chạy một bước riêng.',
        required: false,
        exampleCommand: '/ak:filmmaking create "A 12-minute drama about two sisters who reconnect in a rainy café. Balanced budget, 16:9, stop at each approval gate and before any paid generation"',
      },
    ],
    subcommands: [
      stage('create', 'Run every stage', 'Chạy mọi bước', 'Creates the project with film.py init, then runs each stage in order and stops at every approval gate.', 'Tạo project bằng film.py init, rồi chạy lần lượt từng bước và dừng ở mọi cổng duyệt.', 'A new production graph moved stage by stage up to the next gate.', 'Production graph mới, đi qua từng bước tới cổng duyệt kế tiếp.'),
      stage('script', 'Screenplay and beats', 'Kịch bản và beat', 'Writes the screenplay and the beat sheet that maps beats to scenes, purpose and music theme.', 'Viết kịch bản và beat sheet nối từng beat với cảnh, mục đích và chủ đề nhạc.', 'screenplay.md and beat-sheet.json.', 'screenplay.md và beat-sheet.json.'),
      stage('breakdown', 'Scenes and shots', 'Cảnh và shot', 'Splits scenes into shots, plans coverage, assigns render classes and links continuity.', 'Chia cảnh thành shot, lên phương án góc quay, gán render class và nối liền mạch giữa các shot.', 'Scene and shot files with continuity links.', 'File cảnh và shot kèm liên kết liền mạch.'),
      stage('bible', 'Character bibles', 'Hồ sơ nhân vật', 'Builds characters, wardrobe, locations, props and their reference packs.', 'Dựng nhân vật, trang phục, bối cảnh, đạo cụ và bộ ảnh tham chiếu của chúng.', 'Bibles with reference packs for you to approve.', 'Hồ sơ kèm bộ ảnh tham chiếu để bạn duyệt.'),
      stage('storyboard', 'Storyboard', 'Storyboard', 'Produces storyboard stills and the keyframes that must be approved before generation.', 'Tạo ảnh storyboard và các keyframe cần được duyệt trước khi tạo video.', 'Storyboard stills and approved keyframes.', 'Ảnh storyboard và keyframe đã duyệt.'),
      stage('animatic', 'Animatic', 'Animatic', 'Cuts the first full-length version on the dialogue master as the cost-control gate.', 'Dựng bản đủ thời lượng đầu tiên trên bản thoại master, làm cổng kiểm soát chi phí.', 'An animatic for you to sign off.', 'Animatic để bạn duyệt.'),
      stage('audio', 'Audio', 'Audio', 'Directs the voice master, runs forced alignment, and plans Foley, ambience and music cues.', 'Chỉ đạo bản giọng master, chạy forced alignment, và lên cue cho tiếng động, âm nền và nhạc.', 'Dialogue master, alignment and separate stems.', 'Bản thoại master, alignment và các stem riêng.'),
      stage('render', 'Render shots', 'Render shot', 'Generates each shot from its compiled prompt on the routed model tier, plus lipsync passes.', 'Tạo từng shot từ prompt đã dựng trên mức model được chọn, kèm các lượt lipsync.', 'Per-shot generations recorded on each shot with their cost.', 'Bản tạo của từng shot, ghi lại trên shot kèm chi phí.'),
      stage('qc', 'Quality control', 'Kiểm tra chất lượng', 'Records timestamped failures and the cheapest stage each one returns to.', 'Ghi lỗi kèm mốc thời gian và bước rẻ nhất mà mỗi lỗi cần quay về.', 'QC records you can scrub to by timecode.', 'Bản ghi QC có thể tua tới theo timecode.'),
      stage('assemble', 'Final assembly', 'Dựng bản cuối', 'Builds the final timeline, remuxes the dialogue master and mixes the stems.', 'Dựng timeline cuối, remux bản thoại master và mix các stem.', 'The final cut with no timeline blockers.', 'Bản phim cuối không còn blocker trên timeline.'),
    ],
  },
  promptExamples: [
    {
      labelEn: 'Start a film with gates',
      labelVi: 'Bắt đầu phim có cổng duyệt',
      command: '/ak:filmmaking create "A 12-minute drama about two sisters who reconnect in a rainy café. Balanced budget, 16:9, stop at each approval gate and before any paid generation"',
      commandVi: '/ak:filmmaking create "Phim chính kịch 12 phút về hai chị em làm lành trong một quán cà phê ngày mưa. Budget balanced, 16:9, dừng ở mỗi cổng duyệt và trước mọi lần tạo tốn phí"',
      whenEn: 'Use for a new narrative film when you want to review every stage before money is spent.',
      whenVi: 'Dùng cho một phim kể chuyện mới khi bạn muốn duyệt từng bước trước khi tốn tiền.',
      expectedEn: 'Creates films/<slug>/, writes the screenplay and breakdown, and stops at the bible and storyboard gates with film.py validate results.',
      expectedVi: 'Tạo films/<slug>/, viết kịch bản và bảng chia shot, rồi dừng ở cổng duyệt hồ sơ nhân vật và storyboard kèm kết quả film.py validate.',
      recommended: true,
    },
    {
      labelEn: 'Animatic before rendering',
      labelVi: 'Animatic trước khi render',
      command: '/ak:filmmaking animatic films/rain-check',
      commandVi: '/ak:filmmaking animatic films/rain-check',
      whenEn: 'Use once the dialogue master exists, to check story and timing cheaply.',
      whenVi: 'Dùng khi đã có bản thoại master, để kiểm câu chuyện và nhịp với chi phí thấp.',
      expectedEn: 'Cuts a full-length animatic on the dialogue master and reports the timeline blockers to clear before rendering.',
      expectedVi: 'Dựng animatic đủ thời lượng trên bản thoại master và báo các blocker trên timeline cần xử lý trước khi render.',
    },
    {
      labelEn: 'Fix only the failed shots',
      labelVi: 'Chỉ sửa các shot hỏng',
      command: '/ak:filmmaking qc films/rain-check',
      commandVi: '/ak:filmmaking qc films/rain-check',
      whenEn: 'Use after rendering, when some shots drift in identity, morph or lose lipsync.',
      whenVi: 'Dùng sau khi render, khi vài shot bị lệch nhận dạng nhân vật, biến dạng hoặc lệch khẩu hình.',
      expectedEn: 'Lists timestamped failures with the stage each returns to, so only those shots are redone, for example an identity drift back to the storyboard.',
      expectedVi: 'Liệt kê lỗi kèm mốc thời gian và bước mà mỗi lỗi quay về, để chỉ làm lại đúng các shot đó, ví dụ lệch nhận dạng thì quay về storyboard.',
    },
  ],
  reportOutput: {
    titleEn: 'Film production evidence',
    titleVi: 'Bằng chứng sản xuất phim',
    patternEn: 'film.py validate findings, coverage, routes, estimated vs recorded costs, QC timecodes, and the files produced.',
    patternVi: 'Kết quả film.py validate, coverage, route, chi phí ước tính so với đã ghi, timecode QC, và các file đã tạo.',
    descEn: 'Done only when validate reports no errors for the stages claimed and every warning is fixed or accepted by you, the requested artifact exists on disk (validate --check-media before claiming media), and the final cut uses the dialogue master and separate stems with no timeline blockers. Any stage planned but not run is named.',
    descVi: 'Chỉ xong khi validate không báo lỗi cho các bước đã nhận là xong và mọi cảnh báo đều đã sửa hoặc được bạn chấp nhận, artifact được yêu cầu có thật trên đĩa (chạy validate --check-media trước khi nói đã có media), và bản cuối dùng bản thoại master cùng các stem riêng, không còn blocker trên timeline. Bước nào mới lên kế hoạch mà chưa chạy đều được nêu rõ.',
  },
};

export default data;
