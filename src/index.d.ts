/**
 * algolia-sdk TypeScript declarations
 */
export interface AlgoliaOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Algolia {
  constructor(options?: AlgoliaOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Algolia;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
