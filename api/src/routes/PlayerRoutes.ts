import { Router } from 'express';
import { playerIdParam } from '../config/consts';
import { InternalServerErrorResponse, OkResponse } from '../models/Responses';
import PlayerService from '../services/PlayerService';
import { Player } from '../models/Player';

const playerRoutes = Router();

playerRoutes.get(`/info/:${playerIdParam}`, async (req, res) => {
  let player: Player;
  try {
    player = await PlayerService.getPlayerById(req.params[playerIdParam]);
  } catch (err) {
    //TODO catch errors
    res.send(
      new InternalServerErrorResponse<unknown>(err, 'not catched error'),
    );
    return;
  }

  res.send(new OkResponse<Player>(player));
});

playerRoutes.post(`/create`, async (req, res) => {
  let player: Player = {
    username: req.body.username,
  };
  try {
    player = await PlayerService.createPlayer(player);
  } catch (err) {
    //TODO catch errors
    res.send(
      new InternalServerErrorResponse<unknown>(err, 'not catched error'),
    );
    return;
  }

  res.send(new OkResponse<Player>(player));
});

export default playerRoutes;
