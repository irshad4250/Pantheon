CREATE TABLE IF NOT EXISTS TblUser (
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	Name VARCHAR(255) NOT NULL,
	Email VARCHAR(255) NOT NULL UNIQUE,
	Password VARCHAR(255) NOT NULL
)
