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
        return {
          timestamp: new Date(lines[1].replace('Time: ', '')).toISOString(),
          name: lines[2].replace('Name: ', ''),
          email: lines[3].replace('Email: ', ''),
          message: lines[4].replace('Message: ', ''),
          deviceInfo: {
            platform: lines[7].replace('- Platform: ', ''),
            userAgent: lines[8].replace('- Browser: ', ''),
            language: lines[9].replace('- Language: ', ''),
            screenSize: lines[10].replace('- Screen: ', '')
          }
        }
      })

    return NextResponse.json({ messages })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
} 