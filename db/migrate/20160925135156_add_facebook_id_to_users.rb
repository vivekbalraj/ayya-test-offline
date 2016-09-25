class AddFacebookIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :facebook_id, :string, :unique => true
    add_column :users, :birthday, :string
  end
end
