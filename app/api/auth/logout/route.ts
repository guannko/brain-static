import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Temporarily disabled until auth system is ready
  return NextResponse.json({ 
    message: 'Logout functionality under construction' 
  }, { status: 501 })
}