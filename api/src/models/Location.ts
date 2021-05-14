import mongoose, { Schema, Document } from 'mongoose';

export interface Location {
  coordinates: {
    x: Number;
    y: Number;
  };
  // type: LocationType
  // Inventory: LocationInventory
  // Enemies: Enemy[]
}

export interface LocationDocument extends Location, Document {}

export const locationSchema = new Schema<Location>({
  coordinates: {
    x: Number,
    y: Number,
  },
});

export const LocationModel = mongoose.model<LocationDocument>(
  'Location',
  locationSchema,
);
