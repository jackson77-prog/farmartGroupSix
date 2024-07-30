from flask import Blueprint, request, jsonify
from backend import db
from backend.models import Cart, CartItem, Animal

bp = Blueprint('cart', __name__, url_prefix='/cart')

@bp.route('/<int:user_id>', methods=['GET'])
def get_cart(user_id):
    cart = Cart.query.filter_by(user_id=user_id).first()
    if not cart:
        return jsonify({"message": "Cart not found"}), 404
    items = CartItem.query.filter_by(cart_id=cart.id).all()
    animals = [Animal.query.get(item.animal_id) for item in items]
    return jsonify([animal.as_dict() for animal in animals])

@bp.route('/<int:user_id>/add', methods=['POST'])
def add_to_cart(user_id):
    data = request.get_json()
    animal_id = data['animal_id']
    
    cart = Cart.query.filter_by(user_id=user_id).first()
    if not cart:
        cart = Cart(user_id=user_id)
        db.session.add(cart)
        db.session.commit()
    
    cart_item = CartItem(cart_id=cart.id, animal_id=animal_id)
    db.session.add(cart_item)
    db.session.commit()
    
    return jsonify({"message": "Animal added to cart!"})
