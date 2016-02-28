class Temple < ActiveRecord::Base
  validates :name, :presence => true

  has_many :events
  has_many :cars
end
