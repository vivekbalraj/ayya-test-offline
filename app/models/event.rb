class Event < ActiveRecord::Base
  validates :date, :name, :presence => true
end
