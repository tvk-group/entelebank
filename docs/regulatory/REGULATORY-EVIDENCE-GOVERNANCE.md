# EnteleBANK Regulatory Evidence Governance Framework v0.1

**Status:** Internal working framework — pre-authorisation

## Objective
Ensure every material statement made to regulators, on the public website, in the Regulatory Business Plan or in supporting packs is traceable to current evidence, an explicitly labelled assumption, or a clearly identified future commitment.

## Evidence classes
1. **Verified fact** — supported by authoritative internal/external evidence and current as of a recorded date.
2. **Approved plan** — formally approved future action with accountable owner and dependencies.
3. **Working assumption** — used for modelling/planning and clearly labelled as unverified.
4. **Proposal** — intended design/product/control not yet approved or implemented.
5. **Regulatory interpretation** — legal/compliance view requiring source and review.
6. **Prohibited assertion** — unsupported claim that must not enter public/regulatory material.

## Minimum evidence record
Each material item should carry: evidence ID, statement/assumption, classification, source, source date, owner, reviewer, approval status, expiry/revalidation date, affected documents/pages/models, confidentiality and change history.

## Single-source consistency
The RBP, proposition deck, financial model, website, controller/ownership records, permissions matrix, risk frameworks and regulatory correspondence must not maintain conflicting versions of the same material fact. Changes require impact review across dependent artefacts.

## Regulatory correspondence ledger
Record date, regulator/body, reference, subject, documents sent, statements/commitments made, questions received, response owner, due date, final response and evidence links. Sensitive-name correspondence must be kept distinct from bank-authorisation status.

## Submission quality gate
Before any material regulatory submission: completeness check → evidence trace → numerical reconciliation → permissions/status check → legal/compliance review → senior approval → immutable submission copy/hash → correspondence ledger entry.

## Public-claims gate
Before publishing a material website claim, confirm it is consistent with current authorisation status, permissions, product availability, FSCS/FOS position, ownership/controllers, funding, vendors, technology readiness and regulatory correspondence. Issue #9 is mandatory.

## Staleness
Evidence is not permanent. Time-sensitive facts require expiry/revalidation. If evidence becomes stale, the associated statement returns to pending until revalidated.

## Numerical reconciliation
Customer numbers, balance sheet, P&L, capital, liquidity, funding, pricing and runway must reconcile to the controlled financial model. Manual retyping into decks/submissions should be minimised and independently checked.

## Translation evidence
A locale may be marked complete only when every public route and shell string is complete, regulatory/legal meaning has been reviewed, accessibility/metadata is covered and the English-authoritative qualification is preserved where required. CI remains a technical gate; linguistic/regulatory review remains a human governance gate.

## Sensitive-name boundary
Any FCA non-objection to the proposed sensitive name is recorded as a name-use decision only. It must never be classified or presented as banking authorisation, permission, FSCS status or regulatory endorsement.
