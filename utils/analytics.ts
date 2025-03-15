import fs from 'fs'
import path from 'path'

interface VisitorData {
  timestamp: string
  page: string
  deviceInfo: {
    userAgent: string
    platform: string
    screenSize: string
  }
}

export const trackVisit = async (page: string, deviceInfo: VisitorData['deviceInfo']) => {
  const data: VisitorData = {
    timestamp: new Date().toISOString(),
    page,
    deviceInfo
  }

  const rootDir = process.cwd()
  const filePath = path.join(rootDir, 'visitor-data.txt')

  const formattedData = `
=== New Visit ===
Time: ${new Date(data.timestamp).toLocaleString()}
Page: ${data.page}
Device: ${data.deviceInfo.platform}
Browser: ${data.deviceInfo.userAgent}
Screen: ${data.deviceInfo.screenSize}
==================\n`

  fs.appendFileSync(filePath, formattedData)
} 