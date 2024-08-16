const Vehicle = require('../models/vehicle')

//Method GET
const getVehicle = async (req,res) => {

    const vehicles = await Vehicle.find()  
    
    res.json(vehicles)
}

//Method POST
const postVehicle = async (req, res)=>{
    let msg = 'vehicle inserted'
    const body = req.body
    try{
        const vehicle = new Vehicle(body)
        await vehicle.save() //insert in database
    }
    catch(error)
    {
        msg = error
    }
    res.json({msg:msg})
}

//Method PUT
const putVehicle = async (req, res) => {
    
    let msg = 'vehicle updated'
    const {plate,color,model} = req.body

    try {
        await Vehicle.findOneAndUpdate({plate: plate}, {color: color, model: model})
    } catch (error) {
        msg = error        
    }
    res.json({msg:msg})
}

//Method DELETE
const deleteVehicle = async (req, res) => {
    let msg = 'Vehicle deleted'
    id = req.params.id
    try {
        await Vehicle.findByIdAndDelete({_id: id})
        
    } catch (error) {
        msg = 'there was a problem while deleting'
    }
    res.json({msg:msg})
}


module.exports = {
    getVehicle,
    postVehicle,
    putVehicle,
    deleteVehicle

} 