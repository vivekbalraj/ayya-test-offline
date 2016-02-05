class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.text :description
      t.date :date, null: false
      t.string :tamil_month
      t.integer :tamil_date

      t.timestamps null: false
    end
  end
end
