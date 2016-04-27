class AddViewsToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :views, :integer, :default => 1
  end
end
