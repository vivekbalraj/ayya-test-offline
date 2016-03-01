class AddExtraDetailsToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :is_primary_thangal, :boolean, :default => false
    add_column :temples, :is_book_read, :boolean, :default => false
    remove_column :temples, :running_generation
  end
end
