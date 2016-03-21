class FixEventsTamilDate < ActiveRecord::Migration
  def change
    add_column :events, :no_of_days, :integer
    add_column :events, :day, :string
    add_column :events, :n, :integer
  end
end
