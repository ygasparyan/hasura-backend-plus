// HASURA
exports.HASURA_GRAPHQL_ENDPOINT = process.env.HASURA_GRAPHQL_ENDPOINT || 'https://hasura-xtest.herokuapp.com/v1/graphql';
exports.HASURA_GRAPHQL_ADMIN_SECRET = 'adminsecret';
// exports.HASURA_GRAPHQL_JWT_SECRET = process.env.HASURA_GRAPHQL_JWT_SECRET ? JSON.parse(process.env.HASURA_GRAPHQL_JWT_SECRET) : {'type':'HS256', 'key': 'hasura_secretkey'};

// AUTH
exports.AUTH_ACTIVE = process.env.AUTH_ACTIVE ? process.env.AUTH_ACTIVE === 'true' : true;
exports.AUTH_ANONYMOUS_USERS_ACTIVE = process.env.AUTH_ANONYMOUS_USERS_ACTIVE ? process.env.AUTH_ANONYMOUS_USERS_ACTIVE === 'true' : false;
exports.USER_FIELDS = process.env.USER_FIELDS ? process.env.USER_FIELDS.split(',') : [];
exports.USER_REGISTRATION_AUTO_ACTIVE = process.env.USER_REGISTRATION_AUTO_ACTIVE ? process.env.USER_REGISTRATION_AUTO_ACTIVE === 'true' : false;
exports.JWT_TOKEN_EXPIRES = process.env.JWT_TOKEN_EXPIRES || 15; // expire after 15 minutes
exports.REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES || (60*24*30); // expire after 30 days

// AUTH LOCAL
// exports.AUTH_LOCAL_ACTIVE = process.env.AUTH_LOCAL_ACTIVE ? process.env.AUTH_LOCAL_ACTIVE === 'true' : false;
exports.AUTH_LOCAL_ACTIVE = true;

// PROVIDERS
exports.PROVIDERS_SUCCESS_REDIRECT = process.env.PROVIDERS_SUCCESS_REDIRECT || '';
exports.PROVIDERS_FAILURE_REDIRECT = process.env.PROVIDERS_FAILURE_REDIRECT || '';
