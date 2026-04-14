from pydantic import BaseModel, EmailStr

class ApplicantCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    institution: str