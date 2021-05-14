import { Router } from 'express';
import PlayerService from '../services/PlayerService';
import { Player, PlayerDocument } from '../models/Player';
import { Location, LocationDocument } from '../models/Location';
import LocationService from '../services/LocationService';
import { OkResponse } from '../models/Responses';

const mainRoutes = Router();

mainRoutes.post(`/spawn`, async (req, res) => {
  let player: PlayerDocument = await PlayerService.getPlayerById(
    req.body.playerId,
  );
  const location: LocationDocument =
    await LocationService.getLocationByCoordinates(0, 0);
  player.location = location;
  await player.save();
  res.send(new OkResponse<Player>(player));
});
