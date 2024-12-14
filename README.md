# url_shortner_typescript
 this project can be used to shorten a URL

# URL Shortener

This project is a simple URL shortener built using **Node.js**, **Express**, and **TypeScript**. It allows users to shorten long URLs and later redirect them to their original destination by accessing the shortened URL.

## Features

- **Shorten URLs**: Generate a shortened URL from a long URL.
- **Redirect URLs**: Redirect users to the original long URL when they visit the shortened URL.
- **In-memory storage**: The URLs are stored in memory (in a dictionary) for simplicity.

## Tech Stack

- **Node.js**: A JavaScript runtime to build the backend.
- **Express.js**: A lightweight web framework for building the API.
- **TypeScript**: For type safety and better developer experience.
- **NanoID**: A small, secure, and URL-friendly library to generate unique IDs for shortened URLs.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (>= v16.0)
- **npm** or **yarn** (for managing packages)
- **TypeScript** (if you're running the code directly without `tsx`)

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/marclombry/url_shortner_typescript.git
cd url-shortener

npm install

npx tsx src/index.ts

### In postman
URL : http://localhost:3000/shorten
Body :
Type : raw
Format : JSON
Données :
json :
{
  "longUrl": "https://www.example.com"
}
