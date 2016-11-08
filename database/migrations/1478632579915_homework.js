'use strict'

const Schema = use('Schema')

class HomeworkTableSchema extends Schema {

  up () {
    this.create('todo_lists', (table) => {
      table.increments()
      table.timestamps()
      table.string("title")
      table.integer('user_id')
    })
	}

  down () {
    this.drop('todo_lists')
  }

}

module.exports = HomeworkTableSchema
