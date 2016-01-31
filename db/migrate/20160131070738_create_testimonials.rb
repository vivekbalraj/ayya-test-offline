class CreateTestimonials < ActiveRecord::Migration
  def change
    create_table :testimonials do |t|
      t.string :name
      t.text :text
      t.string :village

      t.timestamps null: false
    end
  end
end
