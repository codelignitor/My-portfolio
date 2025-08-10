import { writeFile, readFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  const data = await request.json();

  // Define file path
  const filePath = path.join(process.cwd(), 'messages.json');

  try {
    // Read existing messages
    let messages = [];
    try {
      const fileData = await readFile(filePath, 'utf-8');
      messages = JSON.parse(fileData);
    } catch (err) {
      // File might not exist, ignore
    }

    // Append new message
    messages.push({
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Write to file
    await writeFile(filePath, JSON.stringify(messages, null, 2));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error saving message:', error);
    return new Response(JSON.stringify({ error: 'Failed to save message' }), { status: 500 });
  }
}

//service_mq8ek9j
//template_f0wovsq
//lsMYi7Fl4KiDH83m1 publickey