CREATE TABLE IF NOT EXISTS TblEventImages (
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	Filepath VARCHAR(255) NOT NULL,
	EventID INTEGER NOT NULL,
	FOREIGN KEY(EventID) REFERENCES TblEvent(ID)
)
