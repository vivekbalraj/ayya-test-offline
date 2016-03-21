class Event < ActiveRecord::Base
  validates :name, :presence => true

  belongs_to :temple

  def self.today
    where("start_date = ?", Time.zone.now.beginning_of_day)
  end
end
