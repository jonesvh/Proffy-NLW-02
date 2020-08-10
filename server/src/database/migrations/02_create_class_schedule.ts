import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); //0 ao 6 // 0 = domingo ... 6 = sabado
        table.integer('from').notNullable(); //horario incial
        table.integer('to').notNullable(); //horario final

        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

//rollback
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule')
}