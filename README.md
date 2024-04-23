# Chat Application

This is a simple chat application built with Node.js, Express, and Socket.io. It allows users to join different chat rooms, send messages, and share their location with other users in real-time.

## Features

- Users can join chat rooms by providing a username and room name.
- Users receive a welcome message upon joining a room.
- Messages are filtered for profanity using the "bad-words" library.
- Users can send text messages and share their location.
- Users receive notifications when other users join or leave the room.

## Installation

1. Clone the repository:
2. Install dependencies:
3. Run the server:

## Usage

1. Open your web browser and navigate to the application's URL (default is `http://localhost:3000`).
2. Enter a username and room name to join a chat room.
3. Send messages or share your location with other users in the room.

## Files

- `index.js`: Main server file responsible for handling WebSocket connections, message sending, and room management.
- `user.js`: Module containing functions for managing users (adding, removing, getting users).
- `messages.js`: Module containing functions for generating message and location objects.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Web application framework for Node.js.
- [Socket.io](https://socket.io/): Real-time bidirectional event-based communication library.
- [Bad-words](https://www.npmjs.com/package/bad-words): Library for filtering profanity in strings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or new features.

## License

This project is licensed under the [MIT License](LICENSE).
