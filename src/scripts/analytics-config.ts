const configuredMeasurementId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? '';

export const measurementId =
  import.meta.env.PROD && /^G-[A-Z0-9]+$/.test(configuredMeasurementId)
    ? configuredMeasurementId
    : undefined;

export const campaignParameters = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content',
  'utm_source_platform', 'utm_creative_format', 'utm_marketing_tactic',
  'gclid', 'dclid', 'gbraid', 'wbraid', 'gclsrc', 'gad_source', 'gad_campaignid', 'srsltid',
];

export const campaignValuePattern = '^[\\p{L}\\p{N} ._~+()-]{1,120}$';
export const entryReferrerKey = 'innovai-entry-referrer';
