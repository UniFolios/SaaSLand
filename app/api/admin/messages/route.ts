import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'

export async function GET(req: Request) {
  // Check authentication
  const adminToken = cookies().get('admin_token')
  if (!adminToken || adminToken.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const rootDir = process.cwd()
    const filePath = path.join(rootDir, 'contact-messages.txt')

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ messages: [] })
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const messages = content
      .split('=== New Message ===')
      .filter(Boolean)
      .map(block => {
        const lines = block.trim().split('\n')
        const messageData: any = {}

        lines.forEach(line => {
          if (line.includes('Time: ')) messageData.timestamp = new Date(line.replace('Time: ', '')).toISOString()
          if (line.includes('Name: ')) messageData.name = line.replace('Name: ', '')
          if (line.includes('Email: ')) messageData.email = line.replace('Email: ', '')
          if (line.includes('Message: ')) messageData.message = line.replace('Message: ', '')
          if (line.includes('Device: ')) {
            messageData.deviceInfo = messageData.deviceInfo || {}
            messageData.deviceInfo.platform = line.replace('Device: ', '')
          }
          if (line.includes('Browser: ')) {
            messageData.deviceInfo = messageData.deviceInfo || {}
            messageData.deviceInfo.userAgent = line.replace('Browser: ', '')
          }
          if (line.includes('Language: ')) {
            messageData.deviceInfo = messageData.deviceInfo || {}
            messageData.deviceInfo.language = line.replace('Language: ', '')
          }
          if (line.includes('Screen: ')) {
            messageData.deviceInfo = messageData.deviceInfo || {}
            messageData.deviceInfo.screenSize = line.replace('Screen: ', '')
          }
        })

        return messageData
      })

    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Error reading messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
} 