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
    const filePath = path.join(rootDir, 'visitor-data.txt')

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ visits: [] })
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const visits = content
      .split('=== New Visit ===')
      .filter(Boolean)
      .map(block => {
        const lines = block.trim().split('\n')
        return {
          timestamp: new Date(lines[1].replace('Time: ', '')).toISOString(),
          page: lines[2].replace('Page: ', ''),
          deviceInfo: {
            platform: lines[3].replace('Device: ', ''),
            userAgent: lines[4].replace('Browser: ', ''),
            screenSize: lines[5].replace('Screen: ', '')
          }
        }
      })

    return NextResponse.json({ visits })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch visits' },
      { status: 500 }
    )
  }
} 