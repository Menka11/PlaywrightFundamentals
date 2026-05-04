# 📊 Custom TTA Reporter - Playwright Automation Framework

A comprehensive, real-time HTML reporting solution for Playwright test automation with advanced visualization, filtering, and detailed test analytics.

---

## 🎯 Overview

The **CustomTTAReporter** is a custom Playwright reporter that generates interactive, feature-rich HTML reports with real-time updates during test execution. Built with modern UI components and designed for ease of navigation and quick issue identification.

**Framework**: Playwright Test Automation  
**Author**: Pramod Dutta  
**Website**: [The Testing Academy](https://thetestingacademy.com)  
**Version**: 1.0.0

---

## ✨ Key Features

### 📈 Real-Time Reporting
- Live test execution updates every 5 seconds
- Real-time test status tracking
- Running test counter with pass/fail/skip statistics
- Automatic report generation during test execution

### 📊 Comprehensive Dashboard
- **Stats Overview**: Total tests, passed, failed, skipped, pass rate
- **Meta Information**: Environment, browser, platform, workers, run ID, start time
- **Duration Tracking**: Total test suite duration with formatted time display
- **Pass Rate Analysis**: Percentage-based performance metrics

### 🔍 Detailed Test Information
- **Test Steps**: Granular step-by-step test execution details
- **Console Logs**: Captured stdout and stderr output per step
- **Screenshots**: Embedded screenshots with modal view capability
- **Videos**: Test execution recordings with playback controls
- **Traces**: Playwright trace files for deep debugging
- **Error Details**: Full error messages and stack traces

### 🏷️ Advanced Filtering
- **Status Filters**: Filter by Passed, Failed, Skipped, or All
- **Priority Filters**: P0, P1, P2, Smoke test categorization
- **Tag-Based Filtering**: Custom test tags for organization
- **Multi-Filter Support**: Combine multiple filter criteria

### 🎨 Interactive UI Components
- **Modal Screenshots**: Click to view full-size screenshot in lightbox
- **Expandable Sections**: Collapsible test detail panels
- **Responsive Design**: Mobile-friendly layout for all screen sizes
- **Status Badges**: Color-coded test status indicators
- **Hover Effects**: Interactive elements with smooth transitions

### 📁 Report Organization
- **Report History**: Automatic history tracking of all test runs
- **Latest Report**: Quick access redirect to the most recent report
- **Timestamped Reports**: Unique run IDs for each test execution
- **File Grouping**: Tests organized by test file and suite

---

## 📋 Report Sections

### 1. Header Section
```
🎭 TTA Automation Report
TTA-Bank - Playwright Framework
```
Dynamic header with gradient background and animated pulse effect

### 2. Statistics Dashboard
```
[Total Tests] [Passed] [Failed] [Skipped] [Pass Rate] [Duration]
```
Six stat cards displaying key metrics with color-coded indicators:
- Green for Passed
- Red for Failed
- Gray for Skipped
- Primary color for Total

### 3. Meta Information Bar
```
Environment | Browser | Platform | Workers | Run ID | Started Time
```
Quick reference information for test execution details

### 4. Filter Panel
```
Priority: All | P0 | P1 | Smoke
Status: All | Passed | Failed | Skipped
```
Dynamic filtering system for test organization

### 5. Test Results Table
Comprehensive table with columns:
| S.No | Suite | Test Name | Author | Priority | Tags | File | Start Time | End Time | Duration | Status | Screenshot | Video | Trace |
|------|-------|-----------|--------|----------|------|------|-----------|---------|----------|--------|-----------|-------|-------|

### 6. Test Detail Panel
Expandable sections for each test:
- **Errors**: Error messages and stack traces
- **Test Steps**: Individual step execution details with timing
- **Screenshots**: Gallery of captured screenshots
- **Videos**: Embedded video player for test recording
- **Traces**: Link to Playwright trace file for debugging

---

## 🚀 Getting Started

### Installation

The CustomTTAReporter is already configured in your Playwright setup. Ensure it's imported in your `playwright.config.ts`:

```typescript
import CustomTTAReporter from './CustomTTAReporter';

export default defineConfig({
  reporter: [
    ['html'],
    [CustomTTAReporter, {}],
  ],
  // ... rest of config
});
```

### Running Tests with Custom Reports

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/Projects/Project4_Task-TTA-bank.spec.ts

# Run with specific browser
npx playwright test --project=chromium

# Run with specific configuration
TEST_ENV=UAT npx playwright test
```

---

## 📂 Report Files and Directories

```
tta-report/
├── index.html                 # Latest report redirect
├── history.html               # Report history page
├── report_YYYYMMDD_HHMMSS.html # Timestamped report
├── screenshots/
│   ├── screenshot_1_1.png
│   ├── screenshot_1_2.png
│   └── ...
└── [videos/]                  # Video recordings
```

### Accessing Reports

**Latest Report**:
```
Open: tta-report/index.html
```

**Specific Report**:
```
Open: tta-report/report_20260504_143022.html
```

**History**:
```
Open: tta-report/history.html
```

---

## 🎨 Visual Features

### Color Scheme
- **Primary Green**: #059669 - Main accent color
- **Success Green**: #22c55e - Passed tests
- **Danger Red**: #ef4444 - Failed tests
- **Warning Yellow**: #f59e0b - Warnings
- **Dark Slate**: #1e293b - Text and headers

### Status Indicators
- ✅ **Passed**: Green gradient badge with checkmark
- ❌ **Failed**: Red gradient badge with X
- ⏭️ **Skipped**: Gray badge with skip icon
- ⏱️ **Timed Out**: Red badge indicating timeout

### Interactive Elements
- **Clickable Test Names**: Expand/collapse test details
- **Screenshot Links**: View full-size in modal
- **Video Controls**: Play/pause embedded videos
- **Collapsible Sections**: Toggle errors, steps, screenshots

---

## 📊 Report Data Structure

### Test Data Captured

```typescript
interface TestData {
  id: string;                    // Unique test identifier
  title: string;                 // Test name
  fullTitle: string;             // Full suite path
  file: string;                  // Test file path
  describePath: string[];        // Suite hierarchy
  location: string;              // File:line reference
  duration: number;              // Execution time (ms)
  status: 'passed' | 'failed' | 'skipped' | 'timedOut';
  retry: number;                 // Retry count
  screenshots: Array;            // Captured screenshots
  steps: StepData[];            // Test steps
  video?: string;               // Video recording path
  trace?: string;               // Trace file path
  error?: string;               // Error message
  errorStack?: string;          // Stack trace
  tags: string[];               // Test tags/labels
}
```

### Step Data Captured

```typescript
interface StepData {
  title: string;                 // Step description
  category: string;              // Step category
  duration: number;              // Step duration (ms)
  status: 'passed' | 'failed' | 'skipped';
  screenshot?: string;           // Step screenshot
  error?: string;                // Step error
  stackTrace?: string;           // Error stack trace
  startTime: string;             // Start time (formatted)
  consoleLogs?: string[];       // Console output
  stepIndex?: number;            // Step order
  videoStartTime?: number;       // Video timestamp (ms)
  videoEndTime?: number;         // Video timestamp (ms)
}
```

---

## ⚙️ Configuration

### Environment Variables

```bash
# Set test environment
TEST_ENV=UAT npx playwright test

# Set test author
TEST_AUTHOR=QA-Team npx playwright test
```

### Run ID Format

Run IDs are automatically generated with timestamp:
```
YYYYMMDD_HHMMSS
Example: 20260504_143022
```

---

## 🎯 Test Tagging for Reports

Tag your tests for better organization:

```typescript
test('@p0 @smoke Login with valid credentials', async ({ page }) => {
  // Test implementation
});

test('@p1 @critical Password reset functionality', async ({ page }) => {
  // Test implementation
});

test.skip('@p2 @ui Button animation timing', async ({ page }) => {
  // Test implementation
});
```

### Supported Tags
- `@p0`, `@p1`, `@p2` - Priority levels
- `@smoke` - Smoke test suite
- `@critical` - Critical functionality
- `@regression` - Regression test
- `@ui` - UI testing
- `@api` - API testing
- Custom tags as needed

---

## 📱 Responsive Design

The report is fully responsive and works on:
- **Desktop**: Full-featured experience with all columns visible
- **Tablet**: Optimized layout with scrollable table
- **Mobile**: Stacked layout with touch-friendly buttons

---

## 🔄 Report History

Reports are automatically organized in the history page:

```
📊 TTA Report History
├── report_20260504_143022.html [LATEST]
├── report_20260504_102515.html
├── report_20260503_165430.html
└── ... (older reports)
```

Each report entry shows:
- Report filename
- Timestamp (YYYY-MM-DD HH:MM:SS)
- "LATEST" badge for most recent report

---

## 🛠️ Troubleshooting

### Report Not Generating
- Ensure `tta-report/` directory exists or has write permissions
- Check that CustomTTAReporter is configured in `playwright.config.ts`
- Verify no file system errors in console output

### Screenshots Not Appearing
- Ensure test uses `page.screenshot()` for explicit screenshots
- Check `tta-report/screenshots/` directory for image files
- Verify screenshot permissions and file integrity

### Real-Time Updates Not Working
- Ensure browser supports meta refresh (all modern browsers do)
- Check that test execution is still in progress
- Refresh browser manually if meta refresh is disabled

### Missing Videos or Traces
- Enable in `playwright.config.ts`:
  ```typescript
  use: {
    video: 'on-first-failure',
    trace: 'on-first-failure',
  }
  ```

---

## 📝 Example Report Output

### Console Output During Test Run
```
╔════════════════════════════════════════════════════════════════╗
║        🎭 TTA PLAYWRIGHT AUTOMATION - REAL-TIME REPORT         ║
╠════════════════════════════════════════════════════════════════╣
║  📅 Started: May 4, 2026, 2:30:22 PM                           ║
║  📊 Total Tests: 15                                            ║
║  🌐 Environment: UAT                                           ║
╚════════════════════════════════════════════════════════════════╝

▶️  STARTING: User can login with valid credentials
   📁 File: login.spec.ts
   📍 Suite: Authentication
   ─────────────────────────────────────────────────────

   ⏳ Navigate to login page...
   ✅ Navigate to login page... (245ms)
   ⏳ Enter valid credentials...
   ✅ Enter valid credentials... (156ms)
   ⏳ Click login button...
   ✅ Click login button... (892ms)
   ─────────────────────────────────────────────────────
   ✅ RESULT: PASSED | Duration: 1s

   📊 Running Total: ✅ 1 | ❌ 0 | ⏭️ 0

╔════════════════════════════════════════════════════════════════╗
║                    📊 FINAL TEST SUMMARY                        ║
╠════════════════════════════════════════════════════════════════╣
║  ✅ Passed:  14                                                 ║
║  ❌ Failed:  1                                                  ║
║  ⏭️  Skipped: 0                                                  ║
║  📊 Total:   15                                                 ║
╠════════════════════════════════════════════════════════════════╣
║  ⏱️  Duration: 1m 23s                                            ║
║  📈 Pass Rate: 93.3%                                            ║
╚════════════════════════════════════════════════════════════════╝
```

---

## 🎓 Best Practices

### 1. Meaningful Test Names
```typescript
// ✅ Good
test('@p0 User can login with valid email and password', async () => {});

// ❌ Avoid
test('login test', async () => {});
```

### 2. Use Descriptive Step Names
```typescript
// ✅ Good
await test.step('Navigate to login page', async () => {
  await page.goto('/login');
});

// ❌ Avoid
await test.step('goto', async () => {
  await page.goto('/login');
});
```

### 3. Capture Screenshots at Key Points
```typescript
await test.step('Verify login successful', async () => {
  await expect(page).toHaveURL('/dashboard');
  await page.screenshot({ path: 'screenshots/dashboard.png' });
});
```

### 4. Use Tags for Organization
```typescript
// Combine related tags
test('@p0 @smoke @critical @api Login endpoint', async () => {});
```

---

## 📞 Support & Feedback

For issues or feature requests related to the CustomTTAReporter:
- **Author**: Pramod Dutta
- **Website**: [The Testing Academy](https://thetestingacademy.com)
- **Documentation**: Check project README and inline comments

---

## 📄 License

This custom reporter is part of the TTA-Bank Playwright Automation Framework.

---

**Last Updated**: May 4, 2026  
**Report Version**: 1.0.0
