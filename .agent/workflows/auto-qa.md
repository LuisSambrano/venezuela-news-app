---
description: Automatic quality assurance check before delivering work
---

# Auto-QA Workflow

Run this workflow automatically before presenting work to user.

## 1. Code Quality Checks

### TypeScript Type Checking

// turbo
npm run type-check 2>&1 || tsc --noEmit

**Expected**: 0 type errors

### ESLint

// turbo
npx eslint . --ext .ts,.tsx --max-warnings 0

**Expected**: 0 errors, 0 warnings

### Build Verification

// turbo
npm run build

**Expected**: Build succeeds without errors

## 2. Content Quality Checks

### Word Count (for articles/docs)

If creating article content:

- Check word count meets minimum
- Articles: 800+ words
- Documentation: Complete sections with examples

### Structure Validation

- [ ] Proper heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Lists used appropriately (bullet or numbered)
- [ ] Code examples properly formatted
- [ ] All links are valid and descriptive

## 3. Accessibility Checks

### Manual Review

- [ ] All images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Interactive elements have proper ARIA attributes
- [ ] Color contrast sufficient (4.5:1 minimum for text)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus states visible on all interactive elements

## 4. Responsive Design

### Breakpoints to Test

- [ ] Mobile (375px) - iPhone SE
- [ ] Tablet (768px) - iPad
- [ ] Desktop (1024px) - Laptop
- [ ] Large (1440px) - Desktop

### Common Issues

- [ ] No horizontal scroll on mobile
- [ ] Text readable at all sizes (min 16px on mobile)
- [ ] Touch targets minimum 44x44px
- [ ] Images scale properly

## 5. Dark Mode Verification

### Visual Check

- [ ] All text readable in dark mode
- [ ] Borders visible in dark mode
- [ ] Images/icons work in both modes
- [ ] Glass effects have proper opacity
- [ ] No white flashes on mode switch

## 6. SEO Compliance

### Metadata

- [ ] Page has unique title (50-60 chars)
- [ ] Meta description present (150-160 chars)
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card metadata

### Structured Data

- [ ] JSON-LD schema present (if article)
- [ ] Schema validates (use schema.org validator)

## 7. Git Status

### Clean State

// turbo
git status

**Check**:

- [ ] No uncommitted sensitive files (.env, secrets)
- [ ] Commits follow conventional commits format
- [ ] No large files accidentally committed
- [ ] .gitignore properly configured

## 8. Performance Check

### Lighthouse (if applicable)

- [ ] Performance score > 90
- [ ] Accessibility score > 95
- [ ] Best Practices score > 90
- [ ] SEO score > 95

### Common Issues

- [ ] Images optimized (WebP, proper sizes)
- [ ] No unnecessary re-renders
- [ ] Code split appropriately
- [ ] No console.log in production

## 9. Report to User

**Summarize QA results**:

✅ **Passed**:

- List what passed all checks

⚠️ **Needs Attention**:

- List items that need minor fixes

❌ **Failed**:

- List critical failures

📝 **Recommendations**:

- Suggest improvements or optimizations

---

**Note**: This workflow should run automatically before calling notify_user to present work.
