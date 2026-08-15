# EnteleBANK — Five-Year Financial Model Specification

Status: Working regulatory model specification — not public financial guidance.

## Purpose
Build one auditable model that reconciles the RBP, funding plan, capital/liquidity analysis, stress testing and management information. No forecast number is to be published or represented as committed until its evidence, assumptions and governance review are complete.

## Time architecture
- Pre-application build period
- Application / assessment period
- Mobilisation period if that route is selected
- Year 1 to Year 5 post-unrestricted launch
- Monthly granularity through at least Year 2; quarterly/annual summaries thereafter, while retaining the ability to model monthly stress effects.

## Core statements
### Balance sheet
Cash and central-bank/settlement balances; liquid assets; customer lending by product if lending enters scope; other assets; customer deposits by segment/product if authorised; wholesale/other funding; liabilities; share capital; reserves; retained earnings.

### Income statement
Interest income and expense; net interest income; fees/commissions; FX/payment income where applicable; expected credit losses where applicable; people; technology/cloud; banking/payment infrastructure; compliance/financial crime; professional/regulatory; premises/operations; insurance; depreciation/amortisation; tax; profit/loss.

### Cash flow / capital runway
Opening cash; equity injections; operating cash burn; capex; regulatory/application programme costs; closing cash; minimum runway; funding trigger dates.

## Operating drivers
Every output must be driver-based rather than a manually typed top-line forecast. Drivers include eligible prospects, applications, onboarding conversion, active customers, accounts/customer, average balances, deposit mix, transaction volumes, card/payment usage, churn, fraud losses, complaints/service costs, headcount by control function, vendor unit costs and cloud usage.

## Capital and liquidity layer
The model must be capable of calculating applicable Pillar 1, Pillar 2A, buffers, PRA buffer, headroom and liquidity metrics using the rules/requirements applicable at the relevant stage. Requirements must not be guessed. Regulatory inputs are evidence fields populated only when confirmed by the applicable framework/regulator/adviser.

The model must separately show at least 12 months of post-authorisation capital support/headroom planning and the operating-expense inputs needed for the new-bank PRA-buffer methodology where applicable.

## Scenarios
1. Base — prudent evidence-supported plan.
2. Downside — slower acquisition, lower balances/revenue, higher costs.
3. Severe but plausible — combined revenue/customer shock, fraud/operational event and funding pressure.
4. Reverse stress — identify combinations that exhaust capital/liquidity/runway or make the business model non-viable.

## Required sensitivities
Customer growth; average deposit balance; deposit beta/funding cost; interest-rate environment; payment/card volume; revenue yield; headcount timing; technology cost; regulatory/compliance cost; fraud/financial-crime loss; credit loss if lending enters scope; capital-raise timing/amount.

## Model controls
- Input/assumption/output separation.
- No hard-coded numbers inside formulas.
- Source, owner, date, confidence and approval status for every material assumption.
- Balance-sheet balancing check.
- Cash-flow reconciliation.
- Scenario selector and change log.
- Independent review/challenge evidence.
- Version freeze for every regulator/investor submission.
- RBP, ICAAP, ILAAP and funding-plan reconciliation before submission.

## Evidence gates before numbers are finalised
Ownership/controller structure; initial capital/funding commitments; product scope; permissions strategy; launch geography; pricing; banking/payment vendors; headcount plan; market research; customer acquisition assumptions; deposit/lending strategy; mobilisation choice; regulatory capital/liquidity treatment.

## Public-communications rule
Forecasts, profitability dates, customer numbers, capital levels or launch dates derived from this model are not public website claims unless separately approved under the Sensitive Name Regulatory Guardrail (Issue #9).
