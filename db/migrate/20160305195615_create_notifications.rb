class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|

      t.text :message, :null => false
      t.string :title
      t.attachment :picture
      t.boolean :is_published, :default => false, :null => false
      t.date :date, null: false

      t.timestamps null: false
    end
  end
end
