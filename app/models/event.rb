class Event < ActiveRecord::Base
  validates :date, :name, :presence => true
  validates :tamil_date, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 31}

  belongs_to :temple

  def self.today
    where("date = ?", Time.zone.now.beginning_of_day)
  end
end
