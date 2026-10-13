import type { SkillInfographic, SkillInvocation, SkillSubcommand } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-test';

// Marketing ak-docs lists `ui <url> [options]` with --headless, --mobile, and --auth
// (core references/ui-testing-workflow.md); Engineer ak-docs omits them, so only this page adds them.
const base: SkillInvocation = engineer.invocation as SkillInvocation;
const baseSubcommands: SkillSubcommand[] = base.subcommands ?? [];

const invocation: SkillInvocation = {
  ...base,
  syntax: '/ak:test [context] OR /ak:test ui [url] [--headless|--mobile|--auth] OR /ak:test <create|optimize|audit> [scope] [--advice] [--ultra] [--interview]',
  subcommands: baseSubcommands.map((sub: SkillSubcommand): SkillSubcommand =>
    sub.name !== 'ui'
      ? sub
      : {
          ...sub,
          syntax: '/ak:test ui [url] [--headless|--mobile|--auth]',
          options: [
            {
              token: '--headless',
              titleEn: 'Headless browser',
              titleVi: 'Browser headless',
              descEn: 'Runs the browser checks without a visible window. Same checks, no on-screen browser.',
              descVi: 'Chạy các bước kiểm tra browser mà không mở cửa sổ. Kiểm tra giống nhau, chỉ không hiện browser trên màn hình.',
              exampleCommand: '/ak:test ui http://localhost:3000/pricing --headless',
            },
            {
              token: '--mobile',
              titleEn: 'Mobile viewport',
              titleVi: 'Viewport mobile',
              descEn: 'Focuses the run on mobile viewports. On a live page, add an inspect-only boundary so no forms are submitted and no account state changes.',
              descVi: 'Tập trung kiểm tra ở viewport mobile. Với trang đang chạy thật, kèm giới hạn chỉ xem để không submit form hay đổi trạng thái tài khoản.',
              exampleCommand: '/ak:test ui https://staging.example.com/pricing --mobile',
            },
            {
              token: '--auth',
              titleEn: 'Signed-in flows',
              titleVi: 'Flow đã đăng nhập',
              descEn: 'Tests pages behind login. Say which test account or auth approach to use; the URL must be one you are authorized to test.',
              descVi: 'Kiểm tra các trang cần đăng nhập. Nói rõ tài khoản test hoặc cách auth sẽ dùng; URL phải là nơi bạn được phép test.',
              exampleCommand: '/ak:test ui http://localhost:3000/account --auth',
            },
          ],
        },
  ),
};

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  invocation,
};

export default data;
