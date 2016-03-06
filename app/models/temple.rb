class Temple < ActiveRecord::Base
  validates :name, :presence => true
  validates_with AttachmentSizeValidator, attributes: :img1, less_than: 1.megabytes
  validates_with AttachmentSizeValidator, attributes: :img2, less_than: 1.megabytes
  validates_with AttachmentSizeValidator, attributes: :img3, less_than: 1.megabytes

  has_many :events

  has_attached_file :img1, styles: { medium: "1024x1024>", thumb: "100x100>" }, :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml"), :dropbox_visibility => 'public'
  validates_attachment_content_type :img1, content_type: /\Aimage\/.*\Z/

  has_attached_file :img2, styles: { medium: "1024x1024>", thumb: "100x100>" }, :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml"), :dropbox_visibility => 'public'
  validates_attachment_content_type :img2, content_type: /\Aimage\/.*\Z/

  has_attached_file :img3, styles: { medium: "1024x1024>", thumb: "100x100>" }, :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml"), :dropbox_visibility => 'public'
  validates_attachment_content_type :img3, content_type: /\Aimage\/.*\Z/

  def images
    [img1.url(:medium), img2.url(:medium), img3.url(:medium)]
  end
end
