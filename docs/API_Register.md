
# BackEnd API Register user 

https://app-api-otdjotq2y2m1y.azurewebsites.net/api/users/register

Post request 
{ "name": "John ", 
  "email": "johnmoe@example.com", 
  "password": "password123",
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
  } 
}

response

    "user": {
        "name": "John Doe",
        "email": "john@example.com",
        "profile": {
            "firstName": "firstName",
            "lastName": "lastName",
            "_id": "67d778c503c3d059f205641c"
        },
        "points": {
            "totalPoints": 0,
            "earned": 0,
            "redeemed": 0,
            "_id": "67d778c503c3d059f205641d"
        },
        "membership": {
            "type": "Basic",
            "isActive": true,
            "_id": "67d778c503c3d059f205641e",
            "startDate": "2025-03-17T01:20:05.020Z"
        },
        "_id": "67d778c503c3d059f205641f",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Q3NzhjNTAzYzNkMDU5ZjIwNTY0MWYiLCJpYXQiOjE3NDIxNzQ0MDV9.CA_P0nHXlfQJYtP3bMN27Cc1hIt7gYbwnMtQWKOvZac"
}
