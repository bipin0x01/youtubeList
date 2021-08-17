# Documentation

Get Started:

# 1. Edit the env-sample file
Put your mongodb cred in 'MONGO_URI'
Specify a PORT number for backend
Save the file as '.env'

# 2. Install dependencies and Run Backend Server
	~ cd server 
	~ npm install
	~ npm start

# 3. Run Frontend Server
	~ cd client
	~ npm install 
	~ npm start

# Now browser it in local server through port 3000





## API Endpoints
USER ENPOINTS

**LIST ALL USERS**

	GET    			'/api/user'


**LIST SPECIFIC USER**

	GET			'/api/user{id}'

**DELETE USER**

	GET			'/api/user/delete/{id}'


**ADD NEW USER**

	POST			'/api/user/add'

Example:
	
	POST 	api/user/add
		
	{	
		"isActive": false,
		"name": "kaji",
		"address": "1234567890",
		"DOB": "1990-04-03",
		"phone": 1234567890,
		"createdBy": "admin"
	}
(note: all fields and mandatory)



**LIST ALL PREFERENCES**

	GET    			'/api/preference'

**ADD NEW PREFERENCE**

	POST			'/api/preference/add'

Example:

	POST 	/api/preference/add

	{
   	 "favouriteMusic": "Rock You",
    	"websiteLink": "https://google.com",
    	"youtubeLink": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    	"isActive": true,
    	"userId": "61178ffe8ce038305195b9b9"
	}

(note: all fields and mandatory)

