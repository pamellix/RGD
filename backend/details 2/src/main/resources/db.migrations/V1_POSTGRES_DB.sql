drop table if exists detail_class cascade;

drop table if exists user_class cascade;

drop sequence if exists detail_class_seq;

drop sequence if exists user_class_seq;

create sequence detail_class_seq start with 1 increment by 50;

create sequence user_class_seq start with 1 increment by 50;

create table detail_class (
      id bigint not null,
      classificator varchar(255),
      description varchar(255),
      detail varchar(255) unique,
      primary key (id)
);

create table user_class (
    id bigint not null,
    login varchar(255) unique,
    password varchar(255),
    role varchar(255),
    primary key (id)
)
