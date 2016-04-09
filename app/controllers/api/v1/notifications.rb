module API
  module V1
    class Notifications < Grape::API
      include API::V1::Defaults

      resource :notifications do
        desc "Get one published notification"
        params do
          requires :id, type: String, desc: "id of the notification"
        end
        get "", root: :notification do
          Notification.select(:message, :id, :title).where(id: params[:id]).as_json(:methods => [:picture_url])
        end
      end
    end
  end
end
