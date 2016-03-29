class Temple < ActiveRecord::Base
  validates :name, :presence => true
  validates_with AttachmentSizeValidator, attributes: :img1, less_than: 1.megabytes
  validates_with AttachmentSizeValidator, attributes: :img2, less_than: 1.megabytes
  validates_with AttachmentSizeValidator, attributes: :img3, less_than: 1.megabytes

  has_many :events
  has_and_belongs_to_many :cars, join_table: :temples_cars

  accepts_nested_attributes_for :events

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
    images = $redis.get("images"+id.to_s)
    if images.nil?
      images = [img1.url(:medium), img2.url(:medium), img3.url(:medium)]
      $redis.set("images"+id.to_s, images)
      $redis.expire("images"+id.to_s, 3.hour.to_i)
      return images
    end
    images[1..images.length-2].split(',').map do |text|
      text = text.squish
      text = text[1..text.length-2]
    end
  end

  after_save :clear_cache

  def clear_cache
    $redis.del("images"+id.to_s)
  end
end
