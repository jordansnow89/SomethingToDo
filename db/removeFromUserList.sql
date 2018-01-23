DELETE FROM user_selection WHERE selection_id = $1;
SELECT * FROM user_selection WHERE userid = $2