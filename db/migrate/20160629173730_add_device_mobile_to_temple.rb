class AddDeviceMobileToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :device_no, :string
  end
end
