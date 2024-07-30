from app import create_app, db

def test_db_connection():
    app = create_app()  # Initialize the app
    with app.app_context():  # Ensure we are within the app context
        try:
            db.engine.connect()  # Attempt to connect to the database
            print("Database connection successful!")
        except Exception as e:
            print(f"Database connection failed: {e}")

if __name__ == "__main__":
    test_db_connection()
