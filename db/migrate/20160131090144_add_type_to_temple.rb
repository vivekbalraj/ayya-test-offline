class AddTypeToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :temple_type, :string, :default => "Thangal", :null => false
  end
end
