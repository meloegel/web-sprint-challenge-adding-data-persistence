
exports.seed = function (knex, Promise) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { id: 1, description: 'Resource one', completed: false },
        { id: 2, description: 'Resource two', completed: false },
        { id: 3, description: 'Resource three', completed: false }
      ]);
    });
};
