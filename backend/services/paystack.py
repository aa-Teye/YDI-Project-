import requests
import os
from dotenv import load_dotenv

load_dotenv()

PAYSTACK_SECRET_KEY = os.getenv("PAYSTACK_SECRET_KEY")
PAYSTACK_URL = "https://api.paystack.co/transaction/initialize"

# Make sure this exact name exists!
def initialize_payment(email: str, amount: int):
    headers = {
        "Authorization": f"Bearer {PAYSTACK_SECRET_KEY}",
        "Content-Type": "application/json",
    }
    
    payload = {
        "email": email,
        "amount": amount * 100, 
        "callback_url": "http://localhost:5173/payment-success"
    }

    response = requests.post(PAYSTACK_URL, json=payload, headers=headers)
    return response.json()