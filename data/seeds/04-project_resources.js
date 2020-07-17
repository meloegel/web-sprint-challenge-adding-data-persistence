
exports.seed = function (knex, Promise) {
  return knex('project_resources').truncate()
    .then(function () {
      return knex('project_resources').insert([
        { id: 1, project_id: 1, resources_id: 1, name: 'test' },
        { id: 2, project_id: 2, resources_id: 2, name: 'test two' },
        { id: 3, project_id: 3, resources_id: 3, name: 'test three' }
      ]);
    });
};
