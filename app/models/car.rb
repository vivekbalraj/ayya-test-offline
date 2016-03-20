class Car < ActiveRecord::Base
  validates_uniqueness_of :name
  validates :name, :presence => true

  has_and_belongs_to_many :temples, join_table: :temples_cars
end
