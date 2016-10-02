class AddSlugToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :slug, :string
  end
end
