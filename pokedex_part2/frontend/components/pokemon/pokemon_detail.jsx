import React from 'react';


class PokemonDetail extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    console.log(this.props.pokemon);
    return(
      <div>
        <ul className="">
          <li><img src={ this.props.pokemon.image_url }/></li>
          <li>Name: {this.props.pokemon.name}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Type: {this.props.pokemon.poke_type}</li>
          <li>Items:
            { this.props.pokemon.item_ids.map(id => <div>{this.props.items[id].name}</div>)}
          </li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
