
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id')
            tbl.string('name').notNullable()
            tbl.string('description')
            tbl.boolean('completed').notNullable().defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments('id')
            tbl.string('description').notNullable()
            tbl.boolean('completed').notNullable().defaultTo(false);
        })
        .createTable('tasks', tbl => {
            tbl.increments('id')
            tbl.string('name').notNullable()
            tbl.string('description')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('id')
            tbl.integer('project_id').unsigned().references('projects.id').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.integer('resources_id').unsigned().references('resources.id').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.string('name')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
};
