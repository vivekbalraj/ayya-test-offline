class CreateTempleCar < ActiveRecord::Migration
  def change
    create_table :temples_cars do |t|

      t.belongs_to :temple, index: true
      t.belongs_to :car, index: true

      t.timestamps null: false
    end

    remove_column :cars, :temple_id
  end
end
