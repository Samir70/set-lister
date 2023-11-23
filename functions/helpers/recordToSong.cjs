exports.recordToSong = (rec2) => {
  return {
    id: rec2.id,
    songTitle: rec2.fields["Song title"],
    artist: rec2.fields.Artist,
    status: rec2.fields.Status,
    setPosition: rec2.fields["Set position"],
  }
}

// fields: {
//   'Song title': "Knockin' On Heaven's Door",
//   Artist: 'Bob Dylan',
//   Status: 'Gigable',
//   'Set position': [Array],
//   GigLists: [Array]
// },