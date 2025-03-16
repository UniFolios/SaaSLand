import { NextResponse } from 'next/server'
import clientPromise from '@/utils/mongodb'
import { MongoServerError } from 'mongodb'

export async function GET() {
  try {
    console.log('Testing MongoDB connection...')
    console.log('MongoDB URI:', process.env.MONGODB_URI?.substring(0, 20) + '...')
    
    // Test the connection
    const client = await clientPromise
    const db = client.db('saasland')
    
    // Try to ping the database
    await db.command({ ping: 1 })
    
    return NextResponse.json({ 
      status: 'Connected successfully to MongoDB!',
      database: 'saasland'
    })
  } catch (error) {
    console.error('MongoDB Connection Error:', error)
    
    if (error instanceof MongoServerError) {
      return NextResponse.json({ 
        error: 'MongoDB Connection Error',
        details: error.message,
        code: error.code
      }, { 
        status: 500 
      })
    }

    return NextResponse.json({ 
      error: 'Failed to connect to MongoDB',
      details: 'Unknown error occurred'
    }, { 
      status: 500 
    })
  }
} 