# Login server starting file using PassportJS

I hate to repeat stuff so here is all the shit you need to make your own user based website. 👻

## Register

Can add more detail if you want to, but here is the basic.

`POST`: http://localhost:4000/user/register

```javascript
{
  username: "YOUR_USERNAME";
  email: "YOUR_EMAIL";
  password: "YOUR_PASSWORD";
}
```

## Login

Good Old login

`POST`: http://localhost:4000/user/login

```javascript
{
  username: "YOUR_USERNAME";
  password: "YOUR_PASSWORD";
}
```

Edit your own login redirect as shown.

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

## Logout

`GET`: http://localhost:4000/user/logout

## Get user data

`GET`: http://localhost:4000/user/
