class AddTempleToEvent < ActiveRecord::Migration
  def change
    add_reference :events, :temple, index: true, foreign_key: true
  end
end
