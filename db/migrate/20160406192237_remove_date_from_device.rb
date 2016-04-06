class RemoveDateFromDevice < ActiveRecord::Migration
  def change
    remove_column :devices, :date
  end
end
