const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const queries = require('./../db/user_queries');
const config = require('./../secrets/pw_config');

module.exports = (passport) => {
	let opts = {};

	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		queries.getUserById(jwt_payload.data.id)
        .then((user) => {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
        })
        .catch((err) => {
            return done(err, false);
		});
	}));
}