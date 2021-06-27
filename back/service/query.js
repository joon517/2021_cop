const tablecreatequery = {
    boardCommonTableCreateQuery : `
    DROP TABLE IF EXISTS boardcommon;
    CREATE TABLE boardcommon
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
    ` ,
    commentsTableCreateQuery : `
        DROP TABLE IF EXISTS comments;
        CREATE TABLE comments
        (
            postid int(11) not null primary key,
            commentid int(11) not null primary key, 
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
            isforcedelete boolean default false
        );
    `,
    voteBoardTableCreateQuery : `
    DROP TABLE IF EXISTS voteboard;
    CREATE TABLE voteboard
    (
        voteid int(11) not null primary key, 
        voteName varchar(50) not null,
        userName varchar(20) not null,
        yes int(11) default 0,
        no int(11) default 0
    );`,
    userTableCreateQuery : `
    DROP TABLE IF EXISTS user;
    CREATE TABLE user
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
    );`,
    bookmarkListTableCreateQuery : `
    DROP TABLE IF EXISTS bookmarklist;
    CREATE TABLE bookmarklist
    (
        userid int(11) not null primary key,
        bookmarkpostiurl varchar(100) not nulll primary key
    );
    `,
    writePostTableCreateQuery : `
    DROP TABLE IF EXISTS writepost;
    CREATE TABLE writepost
    (
        userid int(11) not null primary key,
        posturl varchar(100) not nulll primary key
    );
    `,
    coinAssetListTableCreateQuery : `
    DROP TABLE IF EXISTS coinassetlist;
    CREATE TABLE coinassetlist
    (
        userid int(11) not null primary key,
        coinexchangename varchar(20) not null primary key,
        coinassetname string varchar(2) not null primary key,
        coinassetvalue int(11) default 0
    );
    `,
    stockAssetListTableCreateQuery : `
    DROP TABLE IF EXISTS stockassetlist;
    CREATE TABLE stockassetlist
    (
        userid int(11) not null primary key,
        securitiesfirmname varchar(20) not null primary key,
        virtualaccount string varchar(20),
        stockname string varchar(20) not null primary key,
        stockvalue int(11) default 0
    );
    `,
    rankingTableCreateQuery : `
    DROP TABLE IF EXISTS ranking;
    CREATE TABLE ranking
    (
        rankid int(11) not null primary key,
        category varchar(20) not null, 
        rank1id varchar(20),
        rank2id varchar(20),
        rank3id varchar(20),
        rank4id varchar(20),
        rank5id varchar(20),
    );
    `,
    shortPostTableCreateQuery : `
    DROP TABLE IF EXISTS ranking;
    CREATE TABLE ranking
    (
        shortpostid int(11) not null primary key,
        content varchar(20) not null, 
        likes int(11) default 0,
        dislikes int(11) default 0
    );`,
    followingTableCreateQuery : `
    DROP TABLE IF EXISTS following;
    CREATE TABLE following
    (
        userid int(11) not null primary key,
        followingid varchar(20) not null primary key
    );
    `,
    followerTableCreateQuery : `
    DROP TABLE IF EXISTS follower;
    CREATE TABLE follower
    (
        userid int(11) not null primary key,
        followerid varchar(20) not null primary key
    );
    `,
    virtualAccountNumberListTableCreateQuery : `
    DROP TABLE IF EXISTS virtualaccountnumberlist;
    CREATE TABLE virtualaccountnumberlist
    (
        userid int(11) not null primary key,
        virtualaccountnumber varchar(20) not null primary key,
        securitiesfirmname string varchar(20)
    );`
}

const tableInsertQuery = {
    boardCommonTableInsertQuery = (req) => {
        return
        `
            insert into boardcommon values (
                ${req.body.post_id},
                \'${req.body.title}\',
                \'${req.body.content}\',
                \'${req.body.username}\',
                \'${req.body.date}\',
                0,
                0,
                \'${req.body.category}\',
                false,
                0,
                ${req.body.pics},
                ${req.body.files},
                false,
                false
            )
        `
    },
    commentsTableInsertQuery = (req) => {
        return 
        `
            insert into comments values (
                ${req.body.post_id},
                ${req.body.comment_id},
                \'${req.body.content}\',
                \'${req.body.username}\',
                \'${req.body.date}\',
                0,
                0,
                false,
                0,
                ${req.body.pics},
                ${req.body.files},
                false,
                false
            )
        `
    },
    voteBoardTableInsertQuery = (req) => {
        return 
        `
            insert into voteboard values (
                ${req.body.vote_id},
                \'${req.body.vote_name}\',
                \'${req.body.username}\',
                0,
                0
            )
        `
    },
    userTableInsertQuery = (req) => {
        return
        `
            insert into user values (
                ${req.body.user_id},
                \'${req.body.username}\',
                \'${req.body.password}\',
                ${req.body.is_valid_asset}
                \'${req.body.badge}\',
                \'${req.body.personal_info_openrule}\',
                0,
                0,
                0,
                '',
                '',
                ''
            )
        `
    },
    bookmarkListTableInsertQuery = (req) => {
        return
        `
            insert into bookmarklist values (
                ${req.body.user_id},
                \'${req.body.bookmark_post_url}\'
            )
        `
    },
    writePostTableInsertQuery = (req) => {
        return
        `
            insert into writepost values (
                ${req.body.user_id},
                \'${req.body.post_url}\',
            )
        `
    },
    coinAssetListTableInsertQuery = (req) => {
        return
        `
            insert into coinassetlist values (
                ${req.body.user_id},
                \'${req.body.coin_exchange_name}\',
                \'${req.body.coin_asset_name}\',
                ${req.body.coin_asset_value}
            )
        `
    },
    stockAssetListTableInsertQuery = (req) => {
        return
        `
            insert into stockassetlist values (
                ${req.body.user_id},
                \'${req.body.securities_firm_name}\',
                \'${req.body.virtual_account}\',
                \'${req.body.stock_name}\',
                ${req.body.stock_value}
            )
        `
    },
    rankingTableInsertQuery = (req) => {
        return
        `
            insert into ranking values (
                ${req.body.user_id},
                \'${req.body.category}\',
                \'${req.body.rank1_id}\',
                \'${req.body.rank2_id}\',
                \'${req.body.rank3_id}\',
                \'${req.body.rank4_id}\',
                \'${req.body.rank5_id}\',
                
            )
        `
    },
    shortPostTableInsertQuery = (req) => {
        return
        `
            insert into shortpost values (
                ${req.body.short_post_id},
                \'${req.body.content}\',
                0,
                0
            )
        `
    },
    followingTableInsertQuery = (req) => {
        return
        `
            insert into following values (
                ${req.body.user_id},
                \'${req.body.following_id}\'
            )
        `
    },
    followerTableInsertQuery = (req) => {
        return
        `
            insert into follower values (
                ${req.body.user_id},
                \'${req.body.follower_id}\'
            )
        `
    },
    virtualAccountNumberListTableInsertQuery = (req) => {
        return
        `
            insert into virtualaccountnumberlist values (
                ${req.body.user_id},
                \'${req.body.virtual_account_number}\',
                \'${req.body.securities_firm_name}\'
            )
        `
    }
}

const updateQuery = {
    // TODO 업데이트하는 쿼리 추가
}