# Login server starting file using PassportJS

## REGESTER

'POST': http://localhost:4000/user/register

```javascript
{
  username: "YOUR_USERNAME";
  email: "YOUR_EMAIL";
  password: "YOUR_PASSWORD";
}
```

# LOGIN

'POST': http://localhost:4000/user/login

```javascript
{
  username: "YOUR_USERNAME";
  password: "YOUR_PASSWORD";
}
```

Edit your own login redirect:

```javascript
exports.loginUser = async (req, res) => {
  //LOGIN
  .
  .
  .
  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        return res
          .status(401)
          .json({ error: "Login failed! Check authentication credentials" });
      } else {
        passport.authenticate("local")(req, res, () => {
           ////////////////////////
          //YOUR res.redirect here
          ////////////////////////
          res.send("this works");
        });
      }
    }
  });
};
```

## LOGOUT

'GET': http://localhost:4000/user/logout

## GET USER DATA

'GET': http://localhost:4000/user/me
