interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const saveMessage = async (data: ContactMessage) => {
  try {
    const response = await fetch('/api/save-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save message');
    }

    return true;
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
} 