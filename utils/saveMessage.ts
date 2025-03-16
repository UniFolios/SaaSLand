interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export const saveMessage = async (data: Omit<ContactMessage, 'timestamp'>) => {
  try {
    // Create message object with timestamp
    const message: ContactMessage = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    // Format the message for text file
    const formattedMessage = [
      '=== New Message ===',
      `Time: ${new Date().toLocaleString()}`,
      `Name: ${message.name}`,
      `Email: ${message.email}`,
      `Message: ${message.message}`,
      '==================',
      '',
      ''
    ].join('\n');

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