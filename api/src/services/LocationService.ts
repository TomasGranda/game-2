import { Location, LocationDocument, LocationModel } from '../models/Location';
import { BadRequestRespose, NotFoundResponse } from '../models/Responses';

const getLocationById = async (locationId: String) => {
  let location: LocationDocument;
  try {
    location = await LocationModel.findById(locationId);
  } catch (err) {
    throw new BadRequestRespose(err, 'not catched error');
  }
  return location;
};

const getLocationByCoordinates = async (x: number, y: number) => {
  let location: LocationDocument;
  try {
    location = await LocationModel.findOne({ coordinates: { x, y } });
  } catch (err) {
    throw new NotFoundResponse(err);
  }
  return location;
};

const createLocation = async (location: Location) => {
  let newLocation: LocationDocument;
  try {
    newLocation = await LocationModel.create(location);
  } catch (err) {
    throw new BadRequestRespose(err, 'not catched error');
  }
  return newLocation;
};

export default {
  getLocationById,
  createLocation,
  getLocationByCoordinates,
};
