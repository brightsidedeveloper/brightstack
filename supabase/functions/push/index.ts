import 'jsr:@supabase/functions-js/edge-runtime.d.ts'

Deno.serve(async (req) => {
  const headers = new Headers()
  headers.set('Access-Control-Allow-Origin', '*') // Use specific origin in production
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-client-info, apikey')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers })
  }

  const payload = await req.json()

  const res = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('EXPO_ACCESS_TOKEN')}`,
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json())

  return new Response(res, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Ensure CORS headers are set on the response as well
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-client-info, apikey',
    },
  })
})


