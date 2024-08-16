const express = require('express');
const dbConnect = require('../database/config');
const { getVehicle, postVehicle, putVehicle, deleteVehicle } = require('../controllers/vehicleController');
const { getOwner, postOwner } = require('../controllers/ownerController');

class Server {
  constructor() {
    this.app = express();
    this.pathVehicle = '/api/vehicle';
    this.pathOwner = '/api/owner';

    this.route();
    this.dbConnection();
    this.listen();
  }

  async dbConnection() {
    await dbConnect();
  }

  route() {
    this.app.use(express.json())
    this.app.get(this.pathVehicle, getVehicle);
    this.app.get(this.pathOwner, getOwner);
    this.app.post(this.pathOwner,postOwner );
    this.app.post(this.pathVehicle,postVehicle);
    this.app.put(this.pathVehicle,putVehicle);
    this.app.delete(this.pathVehicle + '/:id',deleteVehicle);


  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }
}

module.exports = Server;