/**
 * algolia-sdk · sovereign wrapper for Algolia
 * Search
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://www.algolia.com/doc/rest-api/search/
 * Homepage: https://algolia.com
 */

export class Algolia {
  constructor({ apiKey, baseURL = 'https://algolia.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://www.algolia.com/doc/rest-api/search/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('algolia ' + res.status);
    return res.json();
  }
}

export default Algolia;

// Metadata
export const meta = {
  "name": "Algolia",
  "category": "Search",
  "homepage": "https://algolia.com",
  "docs_url": "https://www.algolia.com/doc/rest-api/search/",
  "endpoints_count": 0
};
