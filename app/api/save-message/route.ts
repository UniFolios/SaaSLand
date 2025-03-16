import { NextResponse } from 'next/server'
import clientPromise from '@/utils/mongodb'

export async function POST(req: Request) {
  try {
    // Log the incoming request data
    const data = await req.json()
    console.log('Received message data:', data)

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db('saasland')
    
    // Insert the message
    const result = await db.collection('messages').insertOne({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      message: data.message
    })

    console.log('Message saved with ID:', result.insertedId)

    return NextResponse.json({ success: true })
  } catch (error) {
    // Log the actual error
    console.error('MongoDB Error:', error)
    
    return NextResponse.json(
      { error: 'Failed to save message', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}