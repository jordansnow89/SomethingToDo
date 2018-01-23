CREATE TABLE users (
    id serial primary key,
    authid varchar(50),
    name varchar(50),
    profile_picture text
)

CREATE TABLE user_selection (
selection_id serial,
userid  integer,
name text,
start varchar(50),
category varchar ,
description text,
imageurl text ,
is_free boolean,
FOREIGN KEY(userid) REFERENCES users(userid)
)