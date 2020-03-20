export const addGnomeItem = ({name, thumbnail, age, height, weight, hair_color, professions, friends}={}) => ({
  type: 'ADD_GNOME_ITEM',
  name,
  thumbnail,
  age,
  height,
  weight,
  hair_color,
  professions,
  friends
});

