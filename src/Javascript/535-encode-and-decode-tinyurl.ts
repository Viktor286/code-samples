// 535. Encode and Decode TinyURL
// https://leetcode.com/problems/encode-and-decode-tinyurl/

const map = new Map();
const baseUrl = "http://tinyurl.com/";

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const hash = Math.random().toString(26).slice(7);
  map.set(hash, longUrl);
  return `${baseUrl}${hash}`;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const _url = new URL(shortUrl);
  const path = _url.pathname.slice(1);
  const longUrl = map.get(path);
  return longUrl;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
