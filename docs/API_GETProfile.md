
# BackEnd API GET Profile user 

https://app-api-otdjotq2y2m1y.azurewebsites.net/api/users/profile

You must use the JWT token from your login with authorization bearer token
After you login get the JWT and then use it on your GET 
GET 
Bearer Token :  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmM2RhYzE3YmQwNTNmOTc1Nzc1MWIiLCJpYXQiOjE3NDI2ODQ1OTJ9.Ezbp8J9fjzIjLgwo9AcsxEAvO2HufTlmp62dKi9y
5Xs"

```JSON
Response
{
    "user": {
        "_id": "67d8b3fc03c3d059f2056427",
        "name": "John Moe",
        "email": "johnmoe@example.com",
        "profile": {
            "firstName": "firstName",
            "lastName": "lastName",
            "_id": "67d8b3fc03c3d059f2056424"
        },
        "points": {
            "totalPoints": 0,
            "earned": 0,
            "redeemed": 0,
            "_id": "67d8b3fc03c3d059f2056425"
        },
        "membership": {
            "type": "Basic",
            "isActive": true,
            "_id": "67d8b3fc03c3d059f2056426",
            "startDate": "2025-03-17T23:45:00.372Z"
        },
        "__v": 2
    }
}
```