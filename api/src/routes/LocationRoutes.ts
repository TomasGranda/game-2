import { Router } from 'express';
import { locationIdParam } from '../config/consts';
import { InternalServerErrorResponse, OkResponse } from '../models/Responses';
import LocationService from '../services/LocationService';
import { Location } from '../models/Location';

const locationRoutes = Router();

locationRoutes.get(`/info/:${locationIdParam}`, async (req, res) => {
  let location: Location;
  try {
    location = await LocationService.getLocationById(
      req.params[locationIdParam],
    );
  } catch (err) {
    //TODO catch errors
    res.send(
      new InternalServerErrorResponse<unknown>(err, 'not catched error'),
    );
    return;
  }

  res.send(new OkResponse<Location>(location));
});

locationRoutes.post(`/create`, async (req, res) => {
  let location: Location = { 
    coordinates: {
      x: 1,
      y: 0,
    },
  };
  try {
    location = await LocationService.createLocation(location);
  } catch (err) {
    //TODO catch errors
    res.send(
      new InternalServerErrorResponse<unknown>(err, 'not catched error'),
    );
    return;
  }

  res.send(new OkResponse<Location>(location));
});

export default locationRoutes;
