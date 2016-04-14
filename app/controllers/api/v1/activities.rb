module API
  module V1
    class Activities < Grape::API
      include API::V1::Defaults

      resource :activities do
        desc "Get all activities"
        get "", root: :activities do
          activities = PublicActivity::Activity.order('created_at DESC').page(params[:page])
          temples = []
          notifications = []
          response = Hash.new { "response" }
          activities.each do |activity|
            if activity['trackable_type'] == 'Temple'
              temples.push activity['trackable_id']
            elsif activity['trackable_type'] == 'Notification'
              notification = Notification.select('id, title, message, picture_file_name').find(activity['trackable_id']).as_json(:methods => [:picture_url])
              notifications.push notification
            end
          end
          temples = temples.uniq
          notifications = notifications.uniq
          response[:activities] = activities
          response[:temples] = Temple.select('id, name, information, temple_type, village, district, latitude, longitude, founded_at, contact_person, country, state, taluk, pincode, street_address, is_primary_thangal, is_book_read, book_month, is_published, priest_name, facebook_page_url, img1_file_name, img2_file_name, img3_file_name').includes(:events, :cars).where(id: temples).as_json(include: [:events, :cars], :methods => [:images, :thumb])
          response[:notifications] = notifications
          response
        end
      end
    end
  end
end
