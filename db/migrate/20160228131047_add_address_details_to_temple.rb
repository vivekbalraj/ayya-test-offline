class AddAddressDetailsToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :contact_person, :string
    add_column :temples, :country, :string
    add_column :temples, :state, :string
    add_column :temples, :taluk, :string
    add_column :temples, :pincode, :integer
    add_column :temples, :street_address, :text
  end
end
