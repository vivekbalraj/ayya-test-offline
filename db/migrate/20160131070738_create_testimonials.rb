class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.string :name, :null => false
      t.text :text, :null => false
      t.string :village

      t.timestamps null: false
    end
  end
end
