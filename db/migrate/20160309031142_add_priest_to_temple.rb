class AddPriestToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :priest_name, :string
    add_column :temples, :facebook_page_url, :string
  end
end
