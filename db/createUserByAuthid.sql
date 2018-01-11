INSERT INTO Users (authid, name )
VALUES ($1, $2) RETURNING authid, name;