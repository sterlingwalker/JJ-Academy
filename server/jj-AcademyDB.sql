create database if not exists jjacademy;
use jjacademy;

create table if not exists chat_Threads(
	chat_ThreadID integer not null unique,
    user_ID_1 int not null,
    user_ID_2 int not null


);
create table if not exists Users(
    userID integer not null unique primary key,
    user_Name char(50) not null,
    user_Bio char(255)not null,
    user_Belt char(50) not null,
    user_Fname char(50) not null,
    user_LName char(50) not null,
    chat_Thread int null, foreign key  (chat_Thread) references chat_Threads(chat_ThreadID) 
);


create table if not exists Chats(
chat_ID int not null unique primary key,
chat_Message char(100) not null,
chat_Time date not null,
chat_Thread int not null, foreign key  (chat_Thread) references chat_Threads(chat_ThreadID)
);

 create table if not exists journal_Entries(
 entry_ID int not null unique primary key auto_increment,
 entry_Title char(30) not null,
 entry_Text char(200) not null,
 entry_Date date not null null,
 user_id int not null, foreign key  (user_id) references Users(userID)
 );


create table if not exists Matches(
match_ID int not null unique primary key auto_increment,
user_id int not null, foreign key  (user_id) references Users(userID),
match_Title char(50) NOT NULL,
match_Date date NOT NULL,
match_Link char(50) NOT NULL
);

create table if not exists Comments(
comment_id int NOT NULL unique primary key,
comment_text char(100) NOT NULL,
user_id int NOT NULL,
matchID int not null, foreign key  (MatchID) references Matches(match_ID),
entryID int not null, foreign key  (entryID) references journal_Entries(entry_ID)
);


Insert Into Users Values (55, 'jdoe', 'I know jiu jitsu', 'Yellow', 'John', 'Doe', null);

Insert Into journal_Entries(entry_id, entry_Title, entry_Text, entry_Date, user_id)
Values(1, 'Jiu Jitsu Practice', 'Today I learned so much!', curdate(), 55);