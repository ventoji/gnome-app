export default (gnomes, { text }) => {
    return gnomes.filter((gnome,i) => {
      return gnome.name.toLowerCase().includes(text.toLowerCase());
    })
  };
  