export async function GET(request) {
    // Get the user's IP address from the request headers
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(',')[0] : request.ip;
  
    return new Response(JSON.stringify({ ip }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  