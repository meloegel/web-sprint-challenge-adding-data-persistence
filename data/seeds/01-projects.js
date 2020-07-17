
exports.seed = function (knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'One', description: 'Does stuff test', completed: false },
        { id: 2, name: 'Two', description: 'Does other stuff', completed: false },
        { id: 3, name: 'Three', description: 'Does other things', completed: true }
      ]);
    });
};
