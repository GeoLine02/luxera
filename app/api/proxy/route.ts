import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const targetUrl = request.nextUrl.searchParams.get('url');
  
  if (!targetUrl) {
    console.error('Missing URL parameter');
    return new NextResponse(
      JSON.stringify({ error: 'Missing URL parameter' }), 
      { 
        status: 400, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        } 
      }
    );
  }

  try {
    // Decode the URL and create a new URL object to validate it
    const decodedUrl = decodeURIComponent(targetUrl);
    
    // Validate the URL
    let url: URL;
    try {
      url = new URL(decodedUrl);
    } catch (e) {
      console.error('Invalid URL:', decodedUrl, e);
      return new NextResponse(
        JSON.stringify({ error: 'Invalid URL format' }), 
        { 
          status: 400, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          } 
        }
      );
    }
    
    console.log('Proxying request to:', url.toString());

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      // Remove next: { revalidate } as it's not supported in route handlers
      // next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Proxy fetch failed:', {
        status: response.status,
        statusText: response.statusText,
        url: url.toString(),
        errorText
      });
      
      return new NextResponse(
        JSON.stringify({ 
          error: 'Failed to fetch from target URL',
          status: response.status,
          statusText: response.statusText
        }), 
        { 
          status: response.status,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    const data = await response.json();
    
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error fetching data' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Handle OPTIONS method for CORS preflight
// Handle OPTIONS method for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
