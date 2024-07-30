# test_app.py
import pytest
from app import create_app, db
from flask import json

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        db.drop_all()

def test_register(client):
    response = client.post('/auth/register', json={
        'email': 'test@example.com',
        'password': 'password123',
        'user_type': 'farmer',
        'phone': '1234567890',
        'county': 'CountyName',
        'town': 'TownName'
    })
    assert response.status_code == 201
    data = json.loads(response.data)
    assert data['message'] == 'User registered successfully'

def test_login(client):
    client.post('/auth/register', json={
        'email': 'test@example.com',
        'password': 'password123',
        'user_type': 'farmer',
        'phone': '1234567890',
        'county': 'CountyName',
        'town': 'TownName'
    })
    response = client.post('/auth/login', json={
        'email': 'test@example.com',
        'password': 'password123'
    })
    assert response.status_code == 200
    data = json.loads(response.data)
    assert 'access_token' in data
