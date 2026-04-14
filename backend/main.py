from fastapi import FastAPI
from schemas.applicant import ApplicantCreate
from services.paystack import initialize_payment 
from services.google_sheets import save_applicant_to_sheet

# This is the line that was missing! It creates the 'app'.
app = FastAPI(title="YDI Backend API")

@app.get("/")
def home():
    return {"message": "The YDI Engine is humming!"}

@app.post("/api/v1/register")
def register_applicant(applicant: ApplicantCreate):  
    
    # --- Phase 1: Save data to the Google Sheets Vault ---
    sheet_success = save_applicant_to_sheet(
        full_name=applicant.full_name, 
        email=applicant.email, 
        phone=applicant.phone,
        institution=applicant.institution
    )
    
    if not sheet_success:
        print("Warning: Application processed but failed to save to sheet.")

    # --- Phase 2: Generate the Paystack Payment Link ---
    payment_data = initialize_payment(applicant.email, 50)
    
    # --- Phase 3: Return the final response to the user ---
    return {
        "status": "success",
        "payment_url": payment_data['data']['authorization_url'],
        "reference": payment_data['data']['reference']
    }