INSERT INTO user_selection (userid , name , start , category , description  , imageurl  , is_free  )
VALUES ( $1, $2, $3, $4, $5, $6, $7 ) RETURNING user_selection;