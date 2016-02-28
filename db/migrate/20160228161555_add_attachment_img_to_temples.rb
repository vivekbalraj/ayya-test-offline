class AddAttachmentImgToTemples < ActiveRecord::Migration
  def self.up
    change_table :temples do |t|
      t.attachment :img1
      t.attachment :img2
      t.attachment :img3
    end
  end

  def self.down
    remove_attachment :temples, :img1
    remove_attachment :temples, :img2
    remove_attachment :temples, :img3
  end
end
