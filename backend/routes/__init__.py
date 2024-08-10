from flask import Blueprint, jsonify

# Import route modules
from .auth import bp as auth_bp
from .animals import bp as animals_bp
from .cart import bp as cart_bp

# Register all routes in a central function
def register_routes(app):
    # Register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(animals_bp)
    app.register_blueprint(cart_bp)

    # Add the welcome route
    @app.route('/')
    def welcome():
        return jsonify({"message": "Welcome to Farmart backend!"})
