const http = require('http');

const { version } = require('./package.json');
const PORT = process.env.PORT || 3000;

// Static user details returned by GET /get-user
const user = {
  id: 1,
  name: 'Kartavya Solanki',
  email: 'kartavya@example.com',
  role: 'Developer',
  city: 'Ahmedabad',
  country: 'India',
};

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api') {
    return sendJson(res, 200, { message: 'API called Successfully', version });
  }

  if (req.method === 'GET' && req.url === '/get-user') {
    return sendJson(res, 200, { message: 'User fetched Successfully', user });
  }

  sendJson(res, 404, { message: 'Not Found' });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api`);
});
