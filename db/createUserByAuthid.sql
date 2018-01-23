INSERT INTO Users (authid, name, profile_picture )
VALUES ($1, $2 , $3) RETURNING Users