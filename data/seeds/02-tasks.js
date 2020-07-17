
exports.seed = function (knex, Promise) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { id: 1, name: 'Task One', description: 'not easy' },
        { id: 2, name: 'Task Two', description: 'its hard' },
        { id: 3, name: 'Task Three', description: 'tuff' }
      ]);
    });
};
