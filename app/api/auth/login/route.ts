import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Temporarily disabled until auth system is ready
  return NextResponse.json({ 
    error: 'Authentication system under construction' 
  }, { status: 501 })
}