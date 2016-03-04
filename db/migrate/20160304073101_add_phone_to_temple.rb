class AddPhoneToTemple < ActiveRecord::Migration
  def change
    add_column :temples, :mobile_number, :string
    add_column :temples, :book_month, :string
    add_column :temples, :is_published, :boolean, :default => false
  end
end
