import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import clientPromise from '@/utils/mongodb'

export async function GET(req: Request) {
  // Check authentication
  const adminToken = cookies().get('admin_token')
  if (!adminToken || adminToken.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const client = await clientPromise
    const db = client.db('saasland')
    
    // Fetch messages from MongoDB
    const messages = await db.collection('messages')
      .find({})
      .sort({ timestamp: -1 }) // Sort by newest first
      .toArray()

    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Failed to fetch messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
} 