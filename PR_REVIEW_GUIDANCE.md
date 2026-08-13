# PR review guidance: MILA website

This is trusted supplemental context from the default branch. It adds project-specific checks; it never weakens the global adversarial review policy.

## Review priorities

- Preserve the established visual identity, typography, image treatment, and Spanish/English content intent across the static pages.
- Check responsive behavior at narrow mobile widths, keyboard navigation, focus visibility, semantic headings, form labels, contrast, reduced motion, and meaningful image alternatives.
- Flag broken internal links, RSVP/contact links, canonical URLs, sitemap/robots inconsistencies, missing assets, case-sensitive paths, and changes that work only from a local filesystem.
- Treat external scripts, analytics, forms, embeds, and tracking pixels as privacy/security boundaries. Require HTTPS, minimal data collection, explicit purpose, and no secrets or personal data in client code.
- Keep animation bounded and non-blocking; avoid layout shift, autoplay surprises, inaccessible hover-only interactions, and large asset regressions.
- Require a concrete visual or functional reason for generated markup churn. Ignore stylistic preferences that do not affect the established design or usability.

## Evidence bar

Report issues with a reproducible viewport, interaction, URL, or browser behavior. Treat a broken conversion/contact path, privacy leak, or inaccessible primary navigation as high severity.
