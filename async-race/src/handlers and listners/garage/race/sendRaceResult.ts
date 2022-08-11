import { createWinner } from '../../../api/winners/createWinner';
import { getWinnerById } from '../../../api/winners/getWinner';
import { updateWinner } from '../../../api/winners/updateWinner';
import { Winner, WinnerUpdate } from '../../../helpers/types';
import { updateWinnersStore } from '../../../store/updateStore';

export async function sendRaceResult(id: number, time: number) {
  const existingWinner = await getWinnerById(id);

  if (existingWinner.winner === undefined) {
    const data: Winner = {
      id,
      wins: 1,
      time,
    };
    createWinner(data);
  } else {
    const data: WinnerUpdate = {
      wins: 0,
      time,
    };
    data.wins = (existingWinner.winner?.wins as number) + 1;
    if (time > existingWinner.winner.time) {
      data.time = existingWinner.winner.time;
    }
    updateWinner(id, data);
  }

  updateWinnersStore();
}
