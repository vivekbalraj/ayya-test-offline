module API
  module V1
    class Activities < Grape::API
      include API::V1::Defaults

      resource :activities do
        desc "Get all activities"
        get "", root: :activities do
          activities = PublicActivity::Activity.order(:created_at).page(params[:page])
          temples = []
          notifications = []
          response = Hash.new { "response" }
          activities.each do |activity|
            if activity['trackable_type'] == 'Temple'
              temple = Temple.select('id, name, information, temple_type, village, district, latitude, longitude, founded_at, contact_person, country, state, taluk, pincode, street_address, is_primary_thangal, is_book_read, book_month, is_published, priest_name, facebook_page_url, img1_file_name, img2_file_name, img3_file_name').includes(:events, :cars).find(activity['trackable_id']).as_json(include: [:events, :cars], :methods => [:images, :thumb])
              temples.push temple
            elsif activity['trackable_type'] == 'Notification'
              notification = Notification.select(:message, :id, :title).find(activity['trackable_id']).as_json(:methods => [:picture_url])
              notifications.push notification
            end
          end
          response[:activities] = activities
          response[:temples] = temples
          response[:notifications] = notifications
          response
        end
      end
    end
  end
end
