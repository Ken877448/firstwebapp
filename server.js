// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Personal Profile</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .profile-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #667eea;
        }
        
        h1 {
          color: #333;
          margin-bottom: 10px;
          font-size: 2.5em;
        }
        
        .section {
          color: #667eea;
          font-weight: 600;
          font-size: 1.2em;
        }
        
        .info-grid {
          display: grid;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .info-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }
        
        .info-label {
          font-weight: 600;
          color: #555;
          margin-bottom: 5px;
          font-size: 0.9em;
        }
        
        .info-value {
          color: #333;
          font-size: 1.1em;
        }
        
        .quote-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          margin-top: 30px;
        }
        
        .quote-text {
          font-size: 1.3em;
          font-style: italic;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .quote-author {
          font-weight: 600;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="profile-header">
          <h1>Ken R. Germedia</h1>
          <p class="section">Class Section: NT 4101</p>
        </div>
        
        <div class="info-grid">
          <div class="info-card">
            <div class="info-label">DATE OF BIRTH</div>
            <div class="info-value">July 2, 2003</div>
          </div>
          
          <div class="info-card">
            <div class="info-label">AGE</div>
            <div class="info-value">22 years old</div>
          </div>
          
          <div class="info-card">
            <div class="info-label">GENDER</div>
            <div class="info-value">Male</div>
          </div>
          
          <div class="info-card">
            <div class="info-label">HOBBIES & INTERESTS</div>
            <div class="info-value">Playing Video Games</div>
          </div>
        </div>
        
        <div class="quote-section">
          <div class="quote-text">
            "The only way to do great work is to love what you do."
          </div>
          <div class="quote-author">— Steve Jobs</div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});