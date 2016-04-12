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
              temple = Temple.select('id, name, temple_type').find(activity['trackable_id']).as_json(:methods => [:thumb])
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
