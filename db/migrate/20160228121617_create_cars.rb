class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :name, :null => false

      t.timestamps null: false
    end
  end
end
