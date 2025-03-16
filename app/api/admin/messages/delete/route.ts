import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  // Check authentication
  const adminToken = cookies().get('admin_token')
  if (!adminToken || adminToken.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { timestamp } = await req.json()
    const rootDir = process.cwd()
    const filePath = path.join(rootDir, 'contact-messages.txt')

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'No messages found' }, { status: 404 })
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const messages = content.split('=== New Message ===')
    
    const updatedMessages = messages
      .filter(msg => !msg.includes(`Time: ${new Date(timestamp).toLocaleString()}`))
      .join('=== New Message ===')

    fs.writeFileSync(filePath, updatedMessages)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    )
  }
} 