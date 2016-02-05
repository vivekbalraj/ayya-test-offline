class Temple < ActiveRecord::Base
  validates :name, :presence => true
end
