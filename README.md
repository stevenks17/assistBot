# assistBot

A ChatGPT-like chat interface built with React and Node.js that connects to OpenAI's API. Users can interact with different OpenAI models through a clean, modern interface similar to ChatGPT.

## Features

- 💬 Real-time chat interface
- 🔄 Support for multiple OpenAI models
- 🗑️ Clear chat functionality
- 🎨 Clean, modern UI with ChatGPT-like design
- 🔌 REST API backend
- ⚡ Real-time response streaming

## Tech Stack

- Frontend:
  - React
  - CSS
  - Web Vitals for performance monitoring
- Backend:
  - Node.js
  - Express
  - OpenAI API

## Installation

1. Clone the repository
2. Install dependencies:


```git clone https://github.com/yourusername/assistBot.git```
cd assistBot

Install backend dependencies
```npm install```
Install frontend dependencies
```cd client```
```npm install```

OPENAI_API_KEY=your_api_key_here
OPENAI_ORG=your_org_id_here

From the root directory
node index.js
Server will start on http://localhost:3080

From the client directory
```cd client```
```npm start```
Frontend will start on http://localhost:3000

3. Open http://localhost:3000 in your browser

## Security Note

⚠️ The current implementation includes API keys directly in the code. For production use, please move these to environment variables and implement proper security measures.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT License