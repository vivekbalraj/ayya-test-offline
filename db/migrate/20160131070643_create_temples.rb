class CreateTemples < ActiveRecord::Migration
  def change
    create_table :temples do |t|
      t.string :name
      t.text :information

      t.timestamps null: false
    end
  end
end
