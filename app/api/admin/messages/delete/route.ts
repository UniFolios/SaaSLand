import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import clientPromise from '@/utils/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(req: Request) {
  // Check authentication
  const adminToken = cookies().get('admin_token')
  if (!adminToken || adminToken.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { _id } = await req.json()
    
    const client = await clientPromise
    const db = client.db('saasland')
    
    await db.collection('messages').deleteOne({ _id: new ObjectId(_id) })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete message:', error)
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    )
  }
} 