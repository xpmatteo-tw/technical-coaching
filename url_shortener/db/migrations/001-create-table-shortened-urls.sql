
create table urls (
    key char(4) primary key not null,
    original_url text not null
);

update db_info set version = 1;
