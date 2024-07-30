from flask import Blueprint, request, jsonify
from backend import db
from backend.models import User
from werkzeug.security import generate_password_hash, check_password_hash

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user_type = data['user_type']
    phone = data['phone']
    county = data['county']
    town = data['town']
    
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256:600000')
    new_user = User(email=email, password=hashed_password, user_type=user_type, phone=phone, county=county, town=town)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User registered successfully!"})

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    
    user = User.query.filter_by(email=email).first()
    
    if user and check_password_hash(user.password, password):
        # Generate JWT or session token here
        return jsonify({"message": "Login successful!"})
    
    return jsonify({"message": "Invalid credentials"}), 401
