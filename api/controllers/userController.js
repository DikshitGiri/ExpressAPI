const User = require('../models/user');
exports.createUser =async (req, res) => {
    const { username, email, password } = req.body;
    // console.log(username,email,password);
    // res.send(username, email, password);
    const user = await User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    await user.save();
    res.json(user);
 
   
}