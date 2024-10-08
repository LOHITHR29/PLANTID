# Plant Identifier Website

This is a modern Plant Identifier website built with Next.js 14, utilizing the app directory (without a `src` folder). The application allows users to upload an image of a plant and receive its name and other important information using the Google Gemini API. The website is styled using Tailwind CSS to ensure a clean and attractive user interface.

## Features

- **Image Upload**: Users can upload an image of a plant directly from the homepage.
- **Plant Identification**: The app uses the Google Gemini API to identify the plant from the uploaded image.
- **Display Plant Information**: After identification, the plant's name and description are displayed on the screen.
- **Image Display**: The uploaded image is displayed on the screen in a visually appealing manner.
- **Information Table**: A table containing additional information about the plant is shown below the description.
- **Modern UI**: The application is styled with Tailwind CSS, giving it a sleek, modern look.
- **Additional Page Elements**: The page includes headings, text, and other elements to enhance the user experience.

## Tech Stack

- **Next.js 14**: The React framework used for building the app, utilizing the app directory.
- **Google Gemini API**: Used for identifying plants from uploaded images.
- **Tailwind CSS**: For styling the user interface in a modern and responsive manner.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **Google Gemini API Key**: You will need a valid API key from Google Gemini.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/my-plant-identifier-app.git
    cd my-plant-identifier-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables:

    Create a `.env.local` file in the root directory and add your Google Gemini API key:

    ```bash
    NEXT_PUBLIC_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
