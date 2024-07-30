from flask import Blueprint

# Import route modules
from .auth import bp as auth_bp
from .animals import bp as animals_bp
from .cart import bp as cart_bp

def register_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(animals_bp)
    app.register_blueprint(cart_bp)
