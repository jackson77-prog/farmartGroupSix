from flask import Blueprint, request, jsonify
from backend import db
from backend.models import Animal

bp = Blueprint('animals', __name__, url_prefix='/animals')

@bp.route('', methods=['GET'])
def get_animals():
    animals = Animal.query.all()
    return jsonify([animal.as_dict() for animal in animals])

@bp.route('', methods=['POST'])
def add_animal():
    data = request.get_json()
    new_animal = Animal(
        farmer_email=data['farmer_email'],
        price=data['price'],
        county=data['county'],
        town=data['town'],
        breed=data['breed'],
        category=data['category'],
        image_url=data['image_url']
    )
    db.session.add(new_animal)
    db.session.commit()
    return jsonify({"message": "Animal added successfully!"})

# Helper function to serialize animal objects
def as_dict(self):
    return {
        "id": self.id,
        "farmer_email": self.farmer_email,
        "price": self.price,
        "county": self.county,
        "town": self.town,
        "breed": self.breed,
        "category": self.category,
        "image_url": self.image_url
    }
Animal.as_dict = as_dict
