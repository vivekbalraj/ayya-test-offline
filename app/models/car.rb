class Car < ActiveRecord::Base
  validates_uniqueness_of :name
  validates :name, :presence => true

  belongs_to :temple
end
