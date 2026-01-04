from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import google.generativeai as genai
import os
import base64

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-pro")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# 1️⃣ IMAGE → INGREDIENTS API
# -----------------------------
@app.post("/detect-ingredients")
async def detect_ingredients(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image_base64 = base64.b64encode(image_bytes).decode("utf-8")

    response = model.generate_content([
        "Identify all edible food ingredients visible in this fridge image. "
        "Return ONLY a comma-separated list.",
        {
            "mime_type": "image/jpeg",
            "data": image_base64
        }
    ])

    return {
        "ingredients": response.text
    }

# -----------------------------
# 2️⃣ INGREDIENTS → RECIPE API
# -----------------------------
@app.post("/generate-recipe")
async def generate_recipe(payload: dict):
    ingredients = payload.get("ingredients")

    prompt = f"""
You are an intelligent cooking assistant.

User Context:
- Diet Preference: {diet_preference}  (vegan / non-vegan)
- Cooking Mode: {mode}  (15-min rush / quick / normal)
- User Age: {age}

Follow this process STEP BY STEP:

STEP 1: INGREDIENT ANALYSIS
- Given ingredients: {ingredients}
- Check which ingredients realistically work together.
- STRICTLY follow the diet preference:
  - If vegan → do NOT use eggs, dairy, meat, or any animal products.
  - If non-vegan → all ingredients are allowed.
- Do NOT add new ingredients at this step.

STEP 2: MISSING ITEM CHECK
- Decide if a recipe is possible using ONLY the given ingredients.
- If NOT possible, choose ONLY ONE missing ingredient that is essential.
- Ensure the missing ingredient also follows the diet preference.
- If possible, clearly state: "No additional ingredients required."

STEP 3: RECIPE PLANNING
- Decide a simple, practical home-style recipe.
- Adjust the recipe based on Cooking Mode:
  - 15-min rush → minimal steps, very fast cooking.
  - Quick → simple but slightly detailed.
  - Normal → standard home cooking steps.
- Avoid complex techniques if the user age is below 18.

STEP 4: AGE-AWARE INSTRUCTION STYLE
- If age < 18:
  - Use very simple words.
  - Short sentences.
  - Clear and easy steps.
- If age 18–40:
  - Normal clarity with practical tips.
- If age > 40:
  - Calm, clear explanation.
  - Focus on ease and comfort.

STEP 5: FINAL OUTPUT
Provide the output STRICTLY in this format:

Recipe Name:
Cooking Time:
Diet Type:
Ingredients Used:
Missing Ingredient (if any):
Step-by-Step Instructions:

Rules:
- Do NOT invent extra ingredients
- Do NOT repeat analysis steps in output
- Be concise, clear, and user-friendly
"""

    response = model.generate_content(prompt)

    return {
        "recipe": response.text
    }
