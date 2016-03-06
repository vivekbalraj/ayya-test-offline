class CreateDevices < ActiveRecord::Migration
  def change
    create_table :devices do |t|
      t.string :token, :null => false
      t.boolean :enabled, :default => true, :null => false
      t.string :platform, :null => false
      t.date :date, :null => false
      t.timestamps null: false
    end
  end
end
