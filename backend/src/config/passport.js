const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User.model');
const dotenv = require('dotenv');

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if user exists
            let user = await User.findOne({ googleId: profile.id });

            if (user) {
                return done(null, user);
            }

            // Check if user exists with same email (link accounts)
            user = await User.findOne({ email: profile.emails[0].value });

            if (user) {
                user.googleId = profile.id;
                // If linking, we might want to ensure profileCompleted is updated if needed, 
                // but usually existing users are fine.
                await user.save();
                return done(null, user);
            }

            // Create new user
            user = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                profileImage: profile.photos[0].value,
                profileCompleted: false, // New OAuth users need to complete profile
                role: 'client' // Default role
            });

            done(null, user);
        } catch (error) {
            done(error, null);
        }
    }
));
