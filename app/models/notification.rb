class Notification < ActiveRecord::Base
  validates :message, :date, :presence => true
  validates_with AttachmentSizeValidator, attributes: :picture, less_than: 1.megabytes

  has_attached_file :picture, styles: { medium: "1024x1024>", thumb: "100x100>" }, :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml"), :dropbox_visibility => 'public'
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

  def self.today
    where("date = ?", Time.zone.now.beginning_of_day)
  end

  def picture_url
    picture.url
  end

  after_save :create_published_notification

  def create_published_notification
    self.create_activity :published if (self.is_published_changed? && self.is_published == true)
  end

  include PublicActivity::Common
end
