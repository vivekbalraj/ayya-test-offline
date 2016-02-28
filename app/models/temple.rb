class Temple < ActiveRecord::Base
  validates :name, :presence => true

  has_many :events
  has_many :cars
  has_one :address

  has_attached_file :img1, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :img1, content_type: /\Aimage\/.*\Z/

  has_attached_file :img2, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :img2, content_type: /\Aimage\/.*\Z/

  has_attached_file :img3, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :img3, content_type: /\Aimage\/.*\Z/

  def images
    [img1.url(:medium), img2.url(:medium), img3.url(:medium)]
  end
end
