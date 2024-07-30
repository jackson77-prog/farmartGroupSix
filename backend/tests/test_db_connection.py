def test_db_connection(app):
    assert app.config['SQLALCHEMY_DATABASE_URI'] is not None
    assert db.engine.url == app.config['SQLALCHEMY_DATABASE_URI']
