import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    
    // Get the project root directory
    const rootDir = process.cwd()
    const filePath = path.join(rootDir, 'contact-messages.txt')

    // Append the message to the file
    fs.appendFileSync(filePath, message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 })
  }
} 