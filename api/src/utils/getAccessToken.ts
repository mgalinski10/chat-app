export function getAccessToken(cookieHeader: string): string | null {
  const cookies = cookieHeader.split(';').map((c) => c.trim());
  for (const c of cookies) {
    if (c.startsWith('accessToken=')) {
      return c.substring('accessToken='.length);
    }
  }
  return null;
}
