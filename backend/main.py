from fastapi import FastAPI
from schemas.applicant import ApplicantCreate
from services.paystack import initialize_payment 

app = FastAPI(title="YDI Backend API")

@app.get("/")
def home():
    return {"message": "The YDI Engine is humming!"}

@app.post("/api/v1/register")
def register_applicant(applicant: ApplicantCreate):  
    payment_data = initialize_payment(applicant.email, 50)
    
    return {
        "status": "success",
        "payment_url": payment_data['data']['authorization_url'],
        "reference": payment_data['data']['reference']
    }