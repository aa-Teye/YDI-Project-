import os
import requests
from dotenv import load_dotenv

# Load the secret variables from the vault (.env)
load_dotenv()

# Get the webhook URL we just saved
WEBHOOK_URL = os.getenv("GOOGLE_WEBHOOK_URL")

def save_applicant_to_sheet(full_name: str, email: str, phone: str, institution: str):
    if not WEBHOOK_URL:
        print("Error: No Google Webhook URL found in .env file.")
        return False

    # Package the new data
    payload = {
        "full_name": full_name,
        "email": email,
        "phone": phone,
        "institution": institution
    }
    
    # ... (the rest of the requests.post code stays exactly the same)
    try:
        # The 'requests' delivery truck drives the data to the URL
        response = requests.post(WEBHOOK_URL, json=payload)
        
        # Check if the bridge caught it successfully
        if response.status_code == 200:
            print("Success: Data saved to Google Sheets!")
            return True
        else:
            print(f"Failed to save. Google responded with: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"Network error connecting to the bridge: {e}")
        return False