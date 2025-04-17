# SimpleTimeService

A tiny Node.js microservice that returns the current timestamp and the IP address of the visitor in JSON format.

## 🧠 What It Does

When you access the `/` route, it returns a response like:

```json
{
  "timestamp": "2025-04-17T06:28:22.659Z",
  "ip": "::ffff:172.17.0.1"
}

================================================

🚀 How to Run
Locally (Node.js)

npm install
npm start

Visit: http://localhost:3000

================================================

With Docker
Build the image

docker build -t simpletimeservice .

Run the container

docker run -p 3000:3000 simpletimeservice

=================================================
🔐 Security
This container runs the service using a non-root user for better security practices.

=================================================

🛠 Tech Stack

Node.js

Express.js

Docker (Alpine base image)