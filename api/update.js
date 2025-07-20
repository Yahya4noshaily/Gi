import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'latest_signal.json');
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    return res.status(200).json({ status: '✅ Signal updated' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
