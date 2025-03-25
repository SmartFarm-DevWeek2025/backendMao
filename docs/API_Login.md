
# BackEnd API Login user 


https://app-api-otdjotq2y2m1y.azurewebsites.net/api/users/login

```JSON
POST
{ 
  "email": "johnmoe@example.com", 
  "password": "password123"
}

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
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Q4YjNmYzAzYzNkMDU5ZjIwNTY0MjciLCJpYXQiOjE3NDIzMTA5MzB9.lNLiWFFCfNdRG8_Ll0BVYVCOb-k8IztylpxtzDGcSws"
}
```
