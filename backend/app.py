# from flask import Flask, jsonify, request
# from flask_cors import CORS
# from pymongo import MongoClient


# app = Flask(__name__)
# CORS(app)

# # MongoDB setup
# client = MongoClient("mongodb://localhost:27017/")
# db = client["dashboard"]

# @app.route("/api/data", methods=["GET"])
# def get_data():
#     # Example data from MongoDB
#     data = list(db.data.find({}, {"_id": 0}))  # Fetch without the `_id` field
#     return jsonify(data)

# if __name__ == "__main__":
#     app.run(debug=True)

# @app.route('/register', methods=['POST'])
# def register():
#     # Your logic here
#     return jsonify({'message': 'Registration successful'}), 201



# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from flask_jwt_extended import (
#     JWTManager, create_access_token, jwt_required, get_jwt_identity
# )
# from pymongo import MongoClient
# import bcrypt
# import os
# from dotenv import load_dotenv

# load_dotenv()

# # App setup
# app = Flask(__name__)
# CORS(app)
# app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY", "your_jwt_secret_key")
# jwt = JWTManager(app)

# # MongoDB setup
# client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
# db = client['Register']
# users_collection = db['users']

# # Register Route
# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     if users_collection.find_one({"email": email}):
#         return jsonify({"error": "User already exists"}), 409

#     hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
#     users_collection.insert_one({"email": email, "password": hashed_password})
#     return jsonify({"message": "User registered successfully"}), 201

# # Login Route
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     user = users_collection.find_one({"email": email})
#     if not user or not bcrypt.checkpw(password.encode('utf-8'), user['password']):
#         return jsonify({"error": "Invalid email or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify({"token": access_token}), 200


# # MongoDB setup
# client = MongoClient("mongodb://localhost:27017/")
# db = client["dashboard"]

# @app.route("/api/data", methods=["GET"])
# def get_data():
#     # Example data from MongoDB
#     data = list(db.data.find({}, {"_id": 0}))  # Fetch without the `_id` field
#     return jsonify(data)

# # Protected Route (Example)
# @app.route('/protected', methods=['GET'])
# @jwt_required()
# def protected():
#     current_user = get_jwt_identity()
#     return jsonify({"message": f"Hello, {current_user}!"}), 200

# if __name__ == "__main__":
#     app.run(debug=True)










from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from pymongo import MongoClient
import bcrypt
import os
from dotenv import load_dotenv

load_dotenv()

# App setup
app = Flask(__name__)
CORS(app)
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY", "your_jwt_secret_key")
jwt = JWTManager(app)

# MongoDB setup for user registration and login
client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
db1 = client['Register']
users_collection = db1['users']

# Register Route
# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     if users_collection.find_one({"email": email}):
#         return jsonify({"error": "User already exists"}), 409

#     # Hash password before saving it
#     hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
#     users_collection.insert_one({"email": email, "password": hashed_password})
#     return jsonify({"message": "User registered successfully"}), 201


@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if users_collection.find_one({"email": email}):
        return jsonify({"error": "User already exists"}), 409

    # Hash password before saving it
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    print(f"Registering user: {email}")  # Log the registration action
    users_collection.insert_one({"email": email, "password": hashed_password})
    return jsonify({"message": "User registered successfully"}), 201


# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = users_collection.find_one({"email": email})
    if not user or not bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({"error": "Invalid email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"token": access_token}), 200

# Protected Route (Example)
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Hello, {current_user}!"}), 200

# MongoDB setup for other route (Example data route)
client_dashboard = MongoClient("mongodb://localhost:27017/")
db_dashboard = client_dashboard["dashboard"]

@app.route("/api/data", methods=["GET"])
def get_data():
    # Example data from MongoDB
    data = list(db_dashboard.data.find({}, {"_id": 0}))  # Fetch without the `_id` field
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)




