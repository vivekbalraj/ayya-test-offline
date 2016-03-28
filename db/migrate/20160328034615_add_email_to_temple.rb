class AddEmailToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :contact_email, :string
  end
end
