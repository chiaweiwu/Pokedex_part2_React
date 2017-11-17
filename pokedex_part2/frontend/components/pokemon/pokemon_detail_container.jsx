import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import selectPokemonItems from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: state.entities.items
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
