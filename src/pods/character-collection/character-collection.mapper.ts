import * as apiModel from 'pods/character/api';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  bestSentences: character.bestSentences,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});
