class AddDetailsToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :founded_at, :string
    add_column :temples, :running_generation, :integer
  end
end
