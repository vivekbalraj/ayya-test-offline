class Temple < ActiveRecord::Base
  validates :name, :presence => true

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

  scope :no_info, -> { where.not "information <> ''" }
  scope :no_coords, -> { where "latitude is null" or "longitude is null" }
  scope :no_image, -> { where "img1_file_name is null and img2_file_name is null and img3_file_name is null" }
  scope :has_fb_page, -> { where "facebook_page_url <> ''" }
  scope :all_data, -> { }

  def images
    images = $redis.get("images"+id.to_s)
    if images.nil?
      images = [img1.url(:medium), img2.url(:medium), img3.url(:medium)]
      return images
    end
    images[1..images.length-2].split(',').map do |text|
      text = text.squish
      text = text[1..text.length-2]
    end
  end

  def thumb
    thumb = $redis.get("images_thumb"+id.to_s)
  end

  after_save :clear_cache, :create_published_activity, :send_published_notification#, :facebook_page_post

  def clear_cache
    $redis.del("images"+id.to_s)
  end

  def create_published_activity
    self.create_activity :published if (self.is_published_changed? && self.is_published == true)
    self.create_activity :updated if (self.is_published == true && !self.views_changed?)
  end

  def send_published_notification
    TemplePublishedNotifier.send_temple_published(self).deliver if (self.is_published_changed? && self.is_published == true && self.contact_email.present?)
  end

  def facebook_page_post
    if self.is_published_changed? && self.is_published == true
      @user = Koala::Facebook::API.new("EAACEdEose0cBANVQYHKtF07GlQe8vj5YYKFbKRh7SpUPOqNne4zZBHScFYuv2NAuZA8rZBuc98bpQAtxJHHCODUjFNsEBceMy53TilRA0uMZBdfng8YGYZBGZAn9h0ubt9clLE3m27W6cSqLpc1gJGwLXU3vONDR5ZBfRQsR88ULwZDZD")
      pages = @user.get_connections("me", "accounts")
      page_token = @user.get_page_access_token("ayyapathi")
      @page=Koala::Facebook::API.new(page_token)
      @page.put_wall_post("புதிய நிழல்தாங்கல்: #{self.name} \n #{self.information}", {:name => "www.ayyapthi.com", :link => "http://www.ayyapathi.com/temples/#{self.id}"})
    end
  end

  def viewed
    self.views = self.views + 1;
    self
  end

  include PublicActivity::Common
end
