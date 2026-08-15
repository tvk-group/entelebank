# EnteleBANK All-Languages Release

This branch is the single integration PR for completing every remaining configured locale under the zero-omission contract.

## Already complete on main
English (authoritative), Turkish, German, French, Spanish, Italian.

## Must be completed before this PR leaves Draft
Portuguese (pt), Dutch (nl), Polish (pl), Ukrainian (uk), Russian (ru), Romanian (ro), Bulgarian (bg), Greek (el), Czech (cs), Slovak (sk), Hungarian (hu), Arabic (ar, RTL), Persian (fa, RTL), Hebrew (he, RTL), Simplified Chinese (zh), Japanese (ja), Korean (ko), Hindi (hi), Indonesian (id).

## Definition of complete
For every locale: all 12 public route bodies; pre-authorisation banner; global navigation; footer and legal links; accessibility labels; brand alt text; regulatory/legal meaning; locale-preserving links; metadata/SEO where locale-specific metadata exists; RTL direction/layout QA for ar/fa/he; and no untranslated user-visible English except proper names or intentionally authoritative regulatory names/terms.

## Release controls
- Do not merge this PR partially.
- Do not mark a locale complete until its route body, shell and regulatory review are complete.
- CI completeness manifest must cover every configured non-English locale before final review.
- English remains authoritative during pre-authorisation.
- FCA sensitive-name Issue #9 remains release-blocking.
- Translation never implies service availability or authorisation in the language's jurisdiction.
