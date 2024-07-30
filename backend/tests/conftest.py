import pytest
from app import create_app, db
from app.config import TestingConfig

@pytest.fixture(scope='module')
def app():
    app = create_app(TestingConfig)  # Pass the configuration class for testing
    with app.app_context():
        yield app

@pytest.fixture(scope='module')
def client(app):
    return app.test_client()

@pytest.fixture(scope='module')
def init_db(app):
    db.create_all()
    yield db
    db.drop_all()
