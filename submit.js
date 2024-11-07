// api/submit.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Log the data (for debugging)
      console.log("Received username:", username);
      console.log("Received password:", password);
  
      // Mock response (no real database storage in this example)
      res.status(200).json({ message: "Data received", data: { username, password } });
    } else {
      res.status(405).json({ message: "Only POST requests are allowed" });
    }
  }
  