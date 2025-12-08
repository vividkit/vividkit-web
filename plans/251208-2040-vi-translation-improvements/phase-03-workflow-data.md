# Phase 03: Workflow Data

**Phase:** 03 - Workflow Data
**Status:** Ready for Implementation
**Target File:** `/src/data/vi/guides/workflows.ts`

## Objective

Apply translation improvements to the Vietnamese workflow guide data file.

## Current File Analysis

File: `/src/data/vi/guides/workflows.ts`
Lines: 143
Structure: Array of 4 workflow objects

### Workflow Objects

1. **Xay Dung Tinh Nang Moi** (Build New Feature) - Beginner
2. **Sua Loi (Bug Fix)** - Beginner
3. **Trien Khai Nhanh** (Quick Implementation) - Intermediate
4. **Bat Dau Du An Moi** (Start New Project) - Advanced

## Issues Identified

### Issue 1: Level Labels Should Stay English

```typescript
// CURRENT:
level: 'Beginner',  // OK - already English

// BUT in descriptions:
bestFor: 'Them chuc nang moi vao ung dung cua ban',  // Could use "feature"
```

### Issue 2: Mixed Terminology

| Current | Should Be |
|---------|-----------|
| "tinh nang" | "feature" |
| "tests" | Keep "tests" |
| "code" | Keep "code" |
| "tokens" | Keep "tokens" |

### Issue 3: Tip Messages - Too Formal

```typescript
// CURRENT:
tip: '💡 Meo: Su dung /clear truoc /code de tiet kiem tokens',
// BETTER:
tip: '💡 Pro tip: Dung /clear truoc /code de save tokens',
```

## Improvement Plan

### Workflow 1: Build New Feature

```typescript
// BEFORE:
{
  title: 'Xay Dung Tinh Nang Moi',
  level: 'Beginner',
  duration: '~15-30 phut',
  stepCount: 4,
  bestFor: 'Them chuc nang moi vao ung dung cua ban',
  // ...
  steps: [
    {
      command: '/brainstorm',
      typeLabel: 'Kham pha y tuong',
      description: 'Thao luan y tuong tinh nang cua ban voi AI de kham pha cac kha nang va nhan phan hoi',
      // ...
    },
    // ...
  ],
  tip: '💡 Meo: Su dung /clear truoc /code de tiet kiem tokens',
}

// AFTER:
{
  title: 'Build Feature Moi',
  level: 'Beginner',
  duration: '~15-30 phut',
  stepCount: 4,
  bestFor: 'Them feature moi vao app cua ban',
  // ...
  steps: [
    {
      command: '/brainstorm',
      typeLabel: 'Explore Ideas',
      description: 'Thao luan feature ideas voi AI de explore cac options va nhan feedback',
      // ...
    },
    {
      command: '/plan',
      typeLabel: 'Tao Implementation Plan',
      description: 'AI tao detailed step-by-step plan de build feature cua ban',
      // ...
    },
    {
      typeLabel: 'Review & Adjust Plan',
      description: 'Xem qua plan, hoi cau hoi va request changes neu can',
      // ...
    },
    {
      command: '/code @plan.md',
      typeLabel: 'Implement Plan',
      description: 'AI viet code theo plan, chay tests va review work',
      // ...
    }
  ],
  tip: '💡 Pro tip: Dung /clear truoc /code de save tokens',
}
```

### Workflow 2: Bug Fix

```typescript
// BEFORE:
{
  title: 'Sua Loi (Bug Fix)',
  // ...
  steps: [
    {
      command: '/debug',
      typeLabel: 'Dieu tra van de',
      description: 'AI phan tich code cua ban de tim nguyen nhan goc re cua van de',
      // ...
    },
    // ...
  ],
  tip: '💡 Meo: /fix tu dong dinh tuyen den cac lenh sua loi chuyen biet',
}

// AFTER:
{
  title: 'Bug Fix',
  // ...
  steps: [
    {
      command: '/debug',
      typeLabel: 'Investigate Issue',
      description: 'AI analyze code cua ban de tim root cause cua problem',
      // ...
    },
    {
      command: '/fix',
      typeLabel: 'Apply Fix',
      description: 'AI sua bug va explain gi da sai va cach fix',
      // ...
    },
    {
      command: '/test',
      typeLabel: 'Verify Fix',
      description: 'Chay tests de dam bao bug da fix va khong break gi khac',
      // ...
    }
  ],
  tip: '💡 Pro tip: /fix auto-route den specialized fix commands',
}
```

### Workflow 3: Quick Implementation

```typescript
// BEFORE:
{
  title: 'Trien Khai Nhanh',
  // ...
  bestFor: 'Cac tinh nang nho khi ban biet minh muon gi',
  // ...
  features: [
    'Nghien cuu cac phuong phap va cong nghe tot nhat',
    'Tao va thuc hien ke hoach trien khai',
    'Viet va kiem thu code',
    'Xem xet chat luong va cac thuc tien tot nhat'
  ],
}

// AFTER:
{
  title: 'Quick Implementation',
  // ...
  bestFor: 'Small features khi ban biet muon gi',
  // ...
  features: [
    'Research best practices va technologies',
    'Tao va execute implementation plan',
    'Write va test code',
    'Review quality va best practices'
  ],
}
```

### Workflow 4: Start New Project

```typescript
// BEFORE:
{
  title: 'Bat Dau Du An Moi',
  // ...
  bestFor: 'Tao ung dung hoan chinh tu dau',
  // ...
  tip: '⚠️ Canh bao: Lenh nay su dung luong token AI dang ke',
  features: [
    'Nghien cuu va lua chon tech stack',
    'Cau truc va kien truc du an',
    'Thiet ke UI/UX va wireframes',
    'Trien khai hoan chinh voi tests',
    'Tai lieu toan dien'
  ],
}

// AFTER:
{
  title: 'Start New Project',
  // ...
  bestFor: 'Tao complete app tu scratch',
  // ...
  tip: '⚠️ Warning: Command nay dung nhieu AI tokens',
  features: [
    'Research va chon tech stack',
    'Project structure va architecture',
    'UI/UX design va wireframes',
    'Full implementation voi tests',
    'Comprehensive documentation'
  ],
}
```

## Implementation Steps

### Step 1: Backup Current File

```bash
cp /src/data/vi/guides/workflows.ts /src/data/vi/guides/workflows.ts.bak
```

### Step 2: Apply Changes

Edit file with the improvements above.

### Step 3: Verify Build

```bash
npm run build
```

### Step 4: Visual Check

Navigate to `/vi/guides/workflows` and verify:
- All text renders correctly
- No broken layouts
- Tech terms preserved

## Key Changes Summary

| Category | Before | After |
|----------|--------|-------|
| Titles | Full Vietnamese | Mix Viet/Eng (tech terms) |
| Step Labels | Vietnamese | English |
| Descriptions | Formal Vietnamese | Natural mix |
| Tips | "Meo" | "Pro tip" |
| Features | Full Vietnamese | Natural mix |

## Terms to Keep English

Throughout workflows.ts:
- feature
- bug, fix
- tests, testing
- code, coding
- plan, planning
- implement, implementation
- review
- tokens
- tech stack
- UI/UX
- wireframes
- documentation

## Verification Checklist

- [ ] All 4 workflows updated
- [ ] No syntax errors
- [ ] Build passes
- [ ] Visual check completed
- [ ] Tech terms preserved
- [ ] Consistent style across workflows
