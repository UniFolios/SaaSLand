interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  deviceInfo: {
    userAgent: string;
    platform: string;
    language: string;
    screenSize: string;
  };
  location?: {
    latitude: number;
    longitude: number;
  };
}

export const saveMessage = async (data: Omit<ContactMessage, 'timestamp' | 'deviceInfo' | 'location'>) => {
  try {
    // Get device info
    const deviceInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenSize: `${window.screen.width}x${window.screen.height}`,
    };

    // Get location if available
    let location;
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.log('Location not available');
    }

    // Create message object with timestamp
    const message: ContactMessage = {
      ...data,
      timestamp: new Date().toISOString(),
      deviceInfo,
      ...(location && { location }),
    };

    // Format the message for text file
    const formattedMessage = `
=== New Message ===
Time: ${new Date().toLocaleString()}
Name: ${message.name}
Email: ${message.email}
Message: ${message.message}

Device Info:
- Platform: ${deviceInfo.platform}
- Browser: ${deviceInfo.userAgent}
- Language: ${deviceInfo.language}
- Screen: ${deviceInfo.screenSize}

${location ? `Location: ${location.latitude}, ${location.longitude}` : 'Location: Not available'}
==================

`;

    try {
      // Use fetch to send the message to a server endpoint that will save it
      const response = await fetch('/api/save-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: formattedMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to save message');
      }
    } catch (error) {
      // Fallback to localStorage if server save fails
      const existingMessages = localStorage.getItem('contactMessages') || '';
      localStorage.setItem('contactMessages', existingMessages + formattedMessage);
    }

    return true;
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
} 