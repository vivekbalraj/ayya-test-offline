class Event < ActiveRecord::Base
  validates :date, :name, :presence => true

  belongs_to :temple
end
