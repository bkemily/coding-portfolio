const express = require('express');
const router = express.Router();
const passport = require('passport');

// Start Google OAuth
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: true,
    prompt: 'select_account'
  })
);

// Handle Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: process.env.FRONTEND_URL,
    session: true
  }),
  (req, res) => {
    // Set optional frontend-accessible cookie
    res.cookie('userInfo', JSON.stringify({
      name: req.user.displayName,
      email: req.user.emails?.[0]?.value
    }), {
      httpOnly: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.redirect(process.env.FRONTEND_URL);
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          console.error("Error destroying session:", err);
        }
        res.clearCookie('connect.sid', {
          path: '/',
          httpOnly: true,
          sameSite: 'lax'
        });
        res.clearCookie('userInfo', { path: '/' });
        res.sendStatus(200);
      });
    } else {
      res.clearCookie('connect.sid', { path: '/' });
      res.clearCookie('userInfo', { path: '/' });
      res.sendStatus(200);
    }
  });
});

// Endpoint to get current user session info
router.get('/user', (req, res) => {
  if (req.user) {
    res.json({
      loggedIn: true,
      name: req.user.displayName,
      email: req.user.emails?.[0]?.value
    });
  } else {
    res.json({ loggedIn: false });
  }
});

module.exports = router;
