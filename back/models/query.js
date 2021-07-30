const dropTableQuery = {
    dropAllTables : [
        "boardcommon", "comments", "voteboard", "users", "bookmarklist", "writepost", "coinassetlist", 
        "stockassetlist", "ranking", "shortpost", "follower", "following", "virtualaccountnumberlist"
    ]
}

const tableCreateQuery = {
    // TODO 자주 쓰이는 컬럼 쪼개기
    boardCommonTableCreateQuery :
    `CREATE TABLE boardcommon
    (
        postid int(11) not null primary key,
        title varchar(20) not null,
        content text(2000) not null,
        username varchar(20) not null,
        date datetime not null,
        likes int(11) default 0,
        dislikes int(11) default 0,
        category varchar(20) not null,
        isbookmark boolean default false,
        reportcount int default 0,
        pics int(11) ,
        files int(11) ,
        isselfdelete boolean default false,
        isforcedelete boolean default false
    );
    `
    ,
    commentsTableCreateQuery :
    `
        CREATE TABLE comments
        (
            postid int(11) not null,
            commentid int(11) not null, 
            content text(2000) not null,
            username varchar(20) not null,
            date datetime not null,
            likes int(11) default 0,
            dislikes int(11) default 0,
            isbookmark boolean default false,
            reportcount int default 0,
            pics int(11) ,
            files int(11) ,
            isselfdelete boolean default false,
            isforcedelete boolean default false,
            constraint comments primary key(postid, commentid)
        );
    `
    ,
    voteBoardTableCreateQuery :
    `
    CREATE TABLE voteboard
    (
        voteid int(11) not null primary key, 
        voteName varchar(50) not null,
        userName varchar(20) not null,
        yes int(11) default 0,
        no int(11) default 0
    );`
    ,
    userTableCreateQuery :
    `
    CREATE TABLE users
    (
        userid int(11) not null primary key,
        username varchar(20) not null,
        password varchar(256) not null,
        isvalidasset boolean default false,
        badge varchar(10) not null,
        personalinfoopenrule varchar(10) not null,
        totalassetvalue int(11) default 0,
        totalcoinvalue int(11) default 0,
        totalstockvalue int(11) default 0,
        upbitsecretkey varchar(30) default '',
        upbitaccesskey varchar(30) default '',
        virtualaccount varchar(20) default ''
    );`
    ,
    bookmarkListTableCreateQuery :
    `
    CREATE TABLE bookmarklist
    (
        userid int(11) not null,
        bookmarkposturl varchar(100) not null,
        constraint bookmarklist primary key(userid, bookmarkposturl)
    );
    `
    ,
    writePostTableCreateQuery :
    `
    CREATE TABLE writepost
    (
        userid int(11) not null,
        posturl varchar(100) not null,
        constraint writepost primary key(userid, posturl)
    );
    `
    ,
    coinAssetListTableCreateQuery :
    `
    CREATE TABLE coinassetlist
    (
        userid int(11) not null,
        coinexchangename varchar(20) not null,
        coinassetname varchar(2) not null,
        coinassetvalue int(11) default 0,
        constraint coinassetlist primary key(userid, coinexchangename, coinassetname)
    );
    `
    ,
    stockAssetListTableCreateQuery :
    `
    CREATE TABLE stockassetlist
    (
        userid int(11) not null,
        securitiesfirmname varchar(20) not null,
        virtualaccount  varchar(20),
        stockname varchar(20) not null,
        stockvalue int(11) default 0,
        constraint stockassetlist primary key(userid, securitiesfirmname, stockname)
    );
    `
    ,
    rankingTableCreateQuery :
    `
    CREATE TABLE ranking
    (
        rankid int(11) not null primary key,
        category varchar(20) not null, 
        rank1id varchar(20),
        rank2id varchar(20),
        rank3id varchar(20),
        rank4id varchar(20),
        rank5id varchar(20)
    );
    `,
    shortPostTableCreateQuery :
        `
    CREATE TABLE shortpost
    (
        shortpostid int(11) not null primary key,
        content varchar(20) not null, 
        likes int(11) default 0,
        dislikes int(11) default 0
    );`
    ,
    followingTableCreateQuery :
        `
    CREATE TABLE following
    (
        userid int(11) not null,
        followingid varchar(20) not null,
        constraint following primary key(userid, followingid)
    );
    `
    ,
    followerTableCreateQuery :
        `
    CREATE TABLE follower
    (
        userid int(11) not null,
        followerid varchar(20) not null,
        constraint follower primary key(userid, followerid)
    );
    `
    ,
    virtualAccountNumberListTableCreateQuery :
        `
    CREATE TABLE virtualaccountnumberlist
    (
        userid int(11) not null,
        virtualaccountnumber varchar(20) not null,
        securitiesfirmname varchar(20),
        constraint virtualaccountnumberlist primary key(userid, securitiesfirmname)
    );`
}

const tableInsertQuery = {
    boardCommonTableInsertQuery: (body) => {
        return ( 
        `
            insert into boardcommon values (
                ${body.post_id},
                \'${body.title}\',
                \'${body.content}\',
                \'${body.username}\',
                \'${body.date}\',
                0,
                0,
                \'${body.category}\',
                false,
                0,
                ${body.pics},
                ${body.files},
                false,
                false
            );
        `)
    },
    commentsTableInsertQuery: (body) => {
        return (
        `
            insert into comments values (
                ${body.post_id},
                ${body.comment_id},
                \'${body.content}\',
                \'${body.username}\',
                \'${body.date}\',
                0,
                0,
                false,
                0,
                ${body.pics},
                ${body.files},
                false,
                false
            );
        `)
    },
    voteBoardTableInsertQuery: (body) => {
        return (
        `
            insert into voteboard values (
                ${body.vote_id},
                \'${body.vote_name}\',
                \'${body.username}\',
                0,
                0
            );
        `)
    },
    userTableInsertQuery: (body) => {
        return (
        `
            insert into user values (
                ${body.user_id},
                \'${body.username}\',
                \'${body.password}\',
                ${body.is_valid_asset}
                \'${body.badge}\',
                \'${body.personal_info_openrule}\',
                0,
                0,
                0,
                '',
                '',
                ''
            );
        `)
    },
    bookmarkListTableInsertQuery: (body) => {
        return (
        `
            insert into bookmarklist values (
                ${body.user_id},
                \'${body.bookmark_post_url}\'
            );
        `)
    },
    writePostTableInsertQuery: (body) => {
        return (
        `
            insert into writepost values (
                ${body.user_id},
                \'${body.post_url}\',
            );
        `)
    },
    coinAssetListTableInsertQuery: (body) => {
        return (
        `
            insert into coinassetlist values (
                ${body.user_id},
                \'${body.coin_exchange_name}\',
                \'${body.coin_asset_name}\',
                ${body.coin_asset_value}
            );
        `)
    },
    stockAssetListTableInsertQuery: (body) => {
        return (
        `
            insert into stockassetlist values (
                ${body.user_id},
                \'${body.securities_firm_name}\',
                \'${body.virtual_account}\',
                \'${body.stock_name}\',
                ${body.stock_value}
            );
        `)
    },
    rankingTableInsertQuery: (body) => {
        return (
        `
            insert into ranking values (
                ${body.user_id},
                \'${body.category}\',
                \'${body.rank1_id}\',
                \'${body.rank2_id}\',
                \'${body.rank3_id}\',
                \'${body.rank4_id}\',
                \'${body.rank5_id}\',
                
            );
        `)
    },
    shortPostTableInsertQuery: (body) => {
        return (
        `
            insert into shortpost values (
                ${body.short_post_id},
                \'${body.content}\',
                0,
                0
            )
        `)
    },
    followingTableInsertQuery: (body) => {
        return (
        `
            insert into following values (
                ${body.user_id},
                \'${body.following_id}\'
            );
        `)
    },
    followerTableInsertQuery: (body) => {
        return (
        `
            insert into follower values (
                ${body.user_id},
                \'${body.follower_id}\'
            );
        `)
    },
    virtualAccountNumberListTableInsertQuery: (body) => {
        return (
        `
            insert into virtualaccountnumberlist values (
                ${body.user_id},
                \'${body.virtual_account_number}\',
                \'${body.securities_firm_name}\'
            );
        `)
    }
}

const updateQuery = {
    // TODO 업데이트하는 쿼리 추가
    likesUpdateQuery: (body) => {
        return (
        `
        update ${body.table} set likes = likes + 1 where postid = \'${body.post_id}\';
        `)
    },
    dislikesUpdateQuery: (body) => {
        return (
        `
        update ${body.table} set dislikes = dislikes + 1 where postid = \'${body.post_id}\';
        `)
    },
    voteYesUpdateQuery: (body) => {
        return (
        `
        update VoteBoard set yes = yes + 1 where voteid = \'${body.vote_id}\';
        `)
    },
    voteYesUpdateQuery: (body) => {
        return (
        `
            update VoteBoard set no = no + 1 where voteid = \'${body.vote_id}\';
        `)
    }
}

const deleteQuery = {
    followingTableDropQuery: (body) => {
        return (
        `
            Delete from following where userid = \'${body.user_id}\' and followingid = \'${body.following_id}\';
        `)
    },
    followerTableDropQuery: (body) => {
        return (
        `
            Delete from follower where userid = \'${body.user_id}\' and followerid = \'${body.follower_id}\';
        `)
    }
}

module.exports.dropTableQuery = dropTableQuery;
module.exports.tableCreateQuery = tableCreateQuery;
module.exports.tableInsertQuery = tableInsertQuery;
module.exports.updateQuery = updateQuery;
module.exports.deleteQuery = deleteQuery;