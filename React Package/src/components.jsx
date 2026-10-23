import react, { useState, useEffect} from 'react';

export default function Formpokemon({ activePokemon, onSubmit, onCancel }) {
    const [formdata, setFormData] = useState({
        name: '',
        pokemon_type: 'fire'
        image_url: '',
        hp: 50,
        attack: 50,
        defense: 50
    });

