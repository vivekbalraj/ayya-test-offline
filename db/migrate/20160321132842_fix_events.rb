class FixEvents < ActiveRecord::Migration
  def change
    rename_column :events, :date, :start_date
    change_column :events, :start_date, :date, :null => true
    add_column :events, :end_date, :date
  end
end
