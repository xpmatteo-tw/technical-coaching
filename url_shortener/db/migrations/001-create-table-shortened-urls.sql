
create table urls (
    key char(4) primary key not null,
    original_url text not null,
    created_at datetime not null,
    updated_at datetime not null
);

