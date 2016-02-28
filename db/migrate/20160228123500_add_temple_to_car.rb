class AddTempleToCar < ActiveRecord::Migration
  def change
    add_reference :cars, :temple, index: true, foreign_key: true
  end
end
