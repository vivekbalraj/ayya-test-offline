class Testimonial < ActiveRecord::Base
  validates :text, :name, :presence => true
end
