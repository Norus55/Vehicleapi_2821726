const Owner = require('../models/owner')

//method get
const getOwner = async(req, res) => {
    const owners = await Owner.find()
    res.json(owners)
}

//method post

const postOwner = async (req, res)=>{
    let msg = 'owner inserted'
    const body = req.body
    try{
        const owner = new Owner(body)
        await owner.save() //insert in database
    }
    catch(error)
    {
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getOwner,
    postOwner
}