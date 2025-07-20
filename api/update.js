import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.join(process.cwd(), 'public', 'latest_signal.json');
      fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
      return res.status(200).json({ status: "✅ Signal updated" });
    } catch (err) {
      return res.status(500).json({ error: "❌ Failed to write file", details: err.message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
