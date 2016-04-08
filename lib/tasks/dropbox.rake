namespace :dropbox do
  desc "cache all dropbox image url to redis"
  task cache: :environment do
    @temples = Temple.where(is_published: true)
    @temples.each do |temple|
      images = [temple.img1.url(:medium), temple.img2.url(:medium), temple.img3.url(:medium)]
      thumb_img = temple.img1.url(:thumb)
      $redis.set("images"+temple.id.to_s, images)
      $redis.set("images_thumb"+temple.id.to_s, thumb_img)
      $redis.expire("images"+temple.id.to_s, 3.hour.to_i)
      $redis.expire("images_thumb"+temple.id.to_s, 3.hour.to_i)
    end
  end
end
