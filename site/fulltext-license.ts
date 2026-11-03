/** This site's sources whose article text is published under CC BY 4.0. */
const ccBySources = new Set([
  "PLOS Mental Health",
  "PLOS Digital Health",
  "Frontiers in Artificial Intelligence",
  "Frontiers in Psychology",
  "Frontiers in Psychiatry",
]);

export function fulltextLicenseForSource(sourceName: string) {
  return ccBySources.has(sourceName)
    ? { name: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/" }
    : null;
}
