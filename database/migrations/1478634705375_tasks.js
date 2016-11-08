'use strict'

const Schema = use('Schema')

class tasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string("title")
      table.date('due_date')
      table.text('description')
      table.integer('list_id')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = tasksTableSchema
