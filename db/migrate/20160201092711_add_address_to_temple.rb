class AddAddressToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :village, :string
    add_column :temples, :latitude, :decimal, :precision => 15, :scale => 13
    add_column :temples, :longitude, :decimal, :precision => 15, :scale => 13
  end
end
