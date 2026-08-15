export function buildLocale(x){const sec=(title,lead,sections)=>({eyebrow:x.brand,title,lead,sections});return {
'/':{title:x.homeTitle,lead:x.homeLead,notice:x.notice,noticeHeading:x.noticeHeading,regulatoryCta:x.regulatoryCta},
'/about':sec(x.about,x.aboutLead,[[x.purpose,x.purposeText],[x.operating,x.operatingText],[x.group,x.groupText],[x.current,x.notice]]),
'/personal':sec(x.personal,x.personalLead,[[x.proposed,x.personalFeatures],[x.outcomes,x.outcomesText],[x.notAvailable,x.notAvailableText]]),
'/business':sec(x.business,x.businessLead,[[x.proposed,x.businessFeatures],[x.controls,x.controlsText],[x.notAvailable,x.notAvailableText]]),
'/infrastructure':sec(x.infrastructure,x.infrastructureLead,[[x.architecture,x.architectureText],[x.automation,x.automationText],[x.digitalAssets,x.digitalAssetsText]]),
'/security':sec(x.security,x.securityLead,[[x.securityDesign,x.securityText],[x.finCrime,x.finCrimeText],[x.resilience,x.resilienceText],[x.disclosure,x.disclosureText]]),
'/governance':sec(x.governance,x.governanceLead,[[x.governancePrinciples,x.governanceText],[x.threeLines,x.threeLinesText],[x.regDevelopment,x.regDevelopmentText]]),
'/roadmap':{eyebrow:x.roadmap,title:x.roadmapTitle,lead:x.roadmapLead,stages:x.stages,statusHeading:x.current,status:x.notice},
'/regulatory':sec(x.regulatory,x.regulatoryTitle,[[x.current,x.notice],[x.customerProtection,x.customerProtectionText],[x.development,x.developmentText],[x.enquiries,'regulatory@entelebank.com']]),
'/privacy':{...sec(x.privacy,x.privacyLead,[[x.provided,x.providedText],[x.siteInfo,x.siteInfoText],[x.purpose,x.privacyPurpose],[x.contact,x.privacyContact]]),fine:x.privacyFine},
'/cookies':{eyebrow:x.cookies,title:x.cookiesTitle,lead:x.cookiesLead,body:x.cookiesBody},
'/terms':sec(x.terms,x.termsLead,[[x.noOffer,x.noOfferText],[x.noRegRepresentation,x.notice],[x.information,x.informationText]])
}}
