import { Player, PlayerDocument, PlayerModel } from '../models/Player';
import { BadRequestRespose } from '../models/Responses';

const getPlayerById = async (playerId: String) => {
  let player: PlayerDocument;
  try {
    player = await PlayerModel.findById(playerId);
  } catch (err) {
    throw new BadRequestRespose(err, 'not catched error');
  }
  return player;
};

const createPlayer = async (player: Player) => {
  let newPlayer: PlayerDocument;
  try {
    newPlayer = await PlayerModel.create(player);
  } catch (err) {
    throw new BadRequestRespose(err, 'not catched error');
  }
  return newPlayer;
};

export default {
  getPlayerById,
  createPlayer,
};
