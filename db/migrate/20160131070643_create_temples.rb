class CreateTemples < ActiveRecord::Migration
  def change
    create_table :temples do |t|
      t.string :name, :null => false
      t.text :information
      t.string :temple_type, :default => "Thangal", :null => false
      t.string :village
      t.decimal :latitude, :precision => 15, :scale => 13
      t.decimal :longitude, :precision => 15, :scale => 13

      t.timestamps null: false
    end
  end
end
