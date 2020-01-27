const jwt = require('jsonwebtoken');
const jwtKey = "this_is_$ecret";
const jwtExpirySeconds = 300;

const users = {
    user1: 'password1',
    user2: 'password2'
}

const signIn = (req, res) => {
    // Get credentials from JSON body

    const { username, password } = req.body
    // console.log(!password);
    console.log(users[username]);
    if (!username || !password || users[username] !== password) {
        // return 401 error is username or password doesn't exist, or if password does
        // not match the password in our records
        console.log('oii');
        return res.status(401).end("ended");
    }

    // Create a new token with the username in the payload
    // and which expires 300 seconds after issue
    const token = jwt.sign({ username }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: jwtExpirySeconds
    })
    console.log('token:', token)

    // set the cookie as the token string, with a similar max age as the token
    // here, the max age is in milliseconds, so we multiply by 1000
    res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
    res.end()
}

module.exports = signIn;