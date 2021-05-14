import mongoose, { Schema, Document } from 'mongoose';
import { Location, LocationModel } from './Location';

export interface Player {
  username: String;
  location?: Location;
  // status: PlayerStatus
  // inventory: PlayerInventory
}

export interface PlayerDocument extends Player, Document {}

export const playerSchema = new Schema<Player>({
  username: String,
  location: {
    type: Schema.Types.ObjectId,
    ref: LocationModel.name,
  },
});

export const PlayerModel = mongoose.model<PlayerDocument>(
  'Player',
  playerSchema,
);
