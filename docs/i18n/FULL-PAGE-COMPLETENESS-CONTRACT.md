# EnteleBANK Full-Page Translation Completeness Contract

Status: mandatory release control during pre-authorisation.

A locale MUST NOT be described as translated, complete, reviewed or production-ready unless every meaning-bearing and user-visible element of every in-scope route is translated and reviewed.

## Zero-omission rule
For each activated locale, translate all of the following without exception:
- pre-authorisation banner;
- header and every navigation label;
- language-selector accessibility text;
- page title, metadata title and metadata description;
- eyebrow/kicker text;
- every heading and subheading;
- every paragraph and sentence;
- cards, labels, badges and proposed-service qualifiers;
- buttons, links, calls to action and back links;
- regulatory notices, disclaimers and status statements;
- image alt text, figure labels and figcaptions;
- form labels, helper text, validation/error text if introduced;
- tables, diagrams and text embedded in SVGs (prefer locale-rendered HTML text where practical);
- footer navigation, copyright/supporting text and legal qualification;
- Privacy, Cookies and Terms content;
- Security, Regulatory, Roadmap, Governance, Infrastructure, About, Personal and Business pages;
- robots/sitemap/hreflang/canonical locale metadata where applicable;
- screen-reader-only text and other accessibility labels.

## Current public routes in scope
/
/about
/personal
/business
/infrastructure
/security
/governance
/roadmap
/regulatory
/privacy
/cookies
/terms

Any new public route automatically becomes in scope.

## Regulatory translation rule
English is the authoritative regulatory source during pre-authorisation. A translation must preserve the legal meaning that EnteleBANK is proposed/under development, is not currently PRA/FCA-authorised to accept deposits or provide regulated banking services, and does not currently claim FSCS protection.

Never strengthen a translated statement from proposed/intended/may into available/is/will. Never translate language in a way that suggests FCA/PRA approval of the name, institution, roadmap or services.

## Release gate
A locale is publishable only when:
1. all in-scope routes have a complete catalogue;
2. key-set parity with English is 100%;
3. there are zero English fallbacks in visible locale pages except protected names/acronyms/proper nouns;
4. legal/regulatory content has second-person review;
5. navigation, metadata, accessibility labels and footer are reviewed;
6. diagrams/figures contain no untranslated user-facing labels;
7. RTL layout is verified for ar/fa/he;
8. mobile and desktop rendering are checked;
9. Issue #9 sensitive-name guardrail passes.

Partial catalogues may exist in source control but MUST remain explicitly marked `partial` and MUST NOT be presented to visitors as complete translations.
