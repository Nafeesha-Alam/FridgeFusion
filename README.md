#  Fridge Fusion AI 🍳🥗 - Your Smart Kitchen Assistant
### A Personalized, Time-Aware & Inclusive Cooking Assistant

---

## Overview 📑
Fridge Fusion AI is a web-based application that aims to cut down food waste and make daily cooking easier. It uses **Artificial Intelligence** to help users decide what to cook based on the ingredients they already have by utilizing **Computer Vision** and **Large Language Models (LLMs)**.

Users can upload a picture of their open fridge or enter ingredients manually. The system then generates **easy-to-follow, personalized recipes** tailored to dietary preferences, available cooking time, and user age. This project showcases a practical AI solution focused on sustainability, accessibility, and personalization.

---

## Features 🌟

### Ingredient Detection 📷
- Upload a picture of your open fridge
- AI identifies visible ingredients using Vision APIs
- Manual ingredient entry available for flexibility

---

### Dietary Preference Awareness 🥕
- Supports both **Vegan** and **Non-Vegan** users
- Recipes strictly adhere to selected dietary choices

---

### Time & Mood-Based Cooking Modes ⌚
Users can select their cooking speed:
- **15-Minute Rush Mode**
- **Quick Recipe Mode**
- **Normal Cooking Mode**

The AI adjusts recipe steps, complexity, and prep time as needed.

---

### Age-Adaptive Recipe Explanation 👥
- Users share their **age group**
- Recipes are explained in:
  - Simple and beginner-friendly terms
  - Clear, meaningful, and easy-to-follow steps
- Ensures accessibility for students, beginners, and older users

---

### Food Waste Reduction Focus ♻️
- Prioritizes ingredients that are nearing expiration
- Uses as many available items as possible
- Suggests **only one missing ingredient** if necessary

---

## Why AI? 🧠
- **Computer Vision APIs** detect ingredients from images
- **Large Language Models (LLMs)** generate smart, tailored recipes
- Prompt engineering allows for personalization based on:
  - Diet
  - Time
  - Age
  - Recipe tone and complexity

---

## Technologies Used 🛠️
- **Frontend:** React / Next.js  
- **Backend:** Node.js / Python (FastAPI / Flask)  
- **AI & ML:** Vision API, OpenAI / Gemini LLM  
- **Image Processing:** OpenCV  
- **Development Tools:** VS Code, Jupyter Notebook  

---

## Getting Started 🚀

### Prerequisites
Make sure you have these installed:
- Node.js / Python 3.x
- Git
- A modern web browser
- API keys for Vision and LLM services

---

### Installation
Clone the repository:

```bash
git clone https://github.com/your-username/SmartFridgeAI.git
cd SmartFridgeAI
```

Install backend dependencies:

```bash
pip install -r requirements.txt
```

Install frontend dependencies:

```bash
npm install
```

---

## Usage Workflow 🧪

### 1. Ingredient Input

* Upload a fridge picture OR
* Enter ingredients manually

### 2. Preference Selection

* Choose dietary preference (Vegan / Non-Vegan)
* Select cooking mode (Rush / Quick / Normal)
* Provide your age group

### 3. Recipe Generation

* AI creates a personalized recipe
* Clear, step-by-step instructions
* Minimal ingredient suggestions
* Focused on reducing waste

---

## Project Structure 📂

```
.
├── frontend/                 # UI components and image upload
├── backend/                  # API logic and AI integration
├── models/                   # AI prompt templates and logic
├── data/                     # Sample inputs and test data
├── requirements.txt          # Backend dependencies
├── package.json              # Frontend dependencies
├── README.md                 # Project documentation
└── .gitignore                # Ignored files
```

---

## Impact 🎯

* Reduces food waste at home
* Saves time and money
* Encourages home cooking
* Makes AI practical and accessible
* Shows a real-world application of AI

---

## Team Roles 👨‍👩‍👧‍👦

* **Frontend Developer:** UI design, image upload, user experience
* **Backend Developer:** API management and AI integration
* **Prompt Engineer:** Recipe quality, personalization, and tone

---

## Future Scope 📈

* Nutrition and calorie tracking
* Support for multiple languages
* Carbon footprint analysis
* Community recipe sharing
* Voice-based cooking assistant

---

## Contributing 🤝

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License 📄

This project is created for hackathon and educational purposes.

---

## Contact 📞

For questions or collaboration, feel free to reach out to the project contributors.
