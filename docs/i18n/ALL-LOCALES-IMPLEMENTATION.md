# EnteleBANK — Consolidated Remaining-Locale Implementation

This branch is the single implementation stream for all 19 remaining configured locales following the merged PR #28 programme specification.

## Locales in scope
pt, nl, pl, uk, ru, ro, bg, el, cs, sk, hu, ar, fa, he, zh, ja, ko, hi, id.

## Mandatory zero-omission scope per locale
- Homepage
- About
- Personal
- Business
- Infrastructure
- Security
- Governance
- Roadmap
- Regulatory
- Privacy
- Cookies
- Terms
- Pre-authorisation banner
- Full primary navigation
- Footer and legal links
- Accessibility labels
- Brand alternative text
- User-visible visual captions/labels where locale rendering exposes them
- Locale-preserving internal navigation
- Regulatory meaning review

## Additional RTL release gates
Arabic, Persian and Hebrew additionally require `dir="rtl"`, navigation/layout QA, punctuation/numeral review, mixed Latin acronym handling (PRA/FCA/FSCS), and mobile visual QA.

## Regulatory invariant
Every locale must preserve the English-authoritative pre-authorisation position: EnteleBANK is under development and is not currently authorised by the PRA/FCA to accept deposits or provide regulated banking services. Translation never implies authorisation or service availability in the locale's jurisdiction.

## Merge rule
This implementation PR must remain Draft until all 19 locales are implemented and the manifest/CI completeness checks cover the full configured 25-language set. No locale may be marked complete merely to satisfy CI.
