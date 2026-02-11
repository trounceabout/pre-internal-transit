/**
 * Sentry Client-Side Configuration
 *
 * This file is automatically loaded by the @sentry/astro integration.
 * It configures how browser-side error tracking behaves for your static site.
 *
 * Key features:
 * - Captures unhandled JavaScript errors in the browser
 * - Tracks page navigation and performance
 * - Respects privacy (no PII collected by default)
 * - Disabled in development to keep local errors out of dashboard
 */

import * as Sentry from "@sentry/astro";

Sentry.init({
  // Your Sentry project's Data Source Name (DSN)
  // This is public and safe to include in browser code
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,

  // Identify which environment errors come from
  // Values: 'development', 'preview', or 'production'
  // This helps you filter issues by environment in the Sentry dashboard
  environment: import.meta.env.MODE || 'production',

  // Enable performance monitoring integration
  // Tracks page loads, navigation, and custom transactions
  integrations: [
    Sentry.browserTracingIntegration(),
  ],

  // Performance sampling: only track 10% of page loads
  // This reduces Sentry quota usage for high-traffic sites
  // Adjust to 1.0 for 100% tracking or 0.0 to disable entirely
  tracesSampleRate: 0.1,

  // Privacy: Don't send user IP addresses or identifying headers
  // Set to true only if you need user context for debugging
  sendDefaultPii: false,

  // Only send errors in preview and production
  // Keep local development errors out of the dashboard
  // This prevents noise during local development
  enabled: import.meta.env.MODE !== 'development',

  // Capture breadcrumbs for better debugging context
  // Tracks user interactions, console messages, and network requests
  maxBreadcrumbs: 50,

  // Optionally attach release version for release tracking
  // Uncomment if you want to track which version of your app has errors
  // release: "1.0.0",
});
