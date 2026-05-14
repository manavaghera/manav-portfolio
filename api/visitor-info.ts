export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const country = req.headers.get('x-vercel-ip-country') || 'unknown';
  const city = req.headers.get('x-vercel-ip-city') || 'unknown';

  return new Response(
    JSON.stringify({
      ip,
      country,
      city,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
