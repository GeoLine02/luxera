import { NextResponse } from 'next/server';
import { getUser } from '../../[locale]/(auth)/services/login';

export async function GET() {
  try {
    const user = await getUser();
    
    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ 
      authenticated: true, 
      user 
    });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
