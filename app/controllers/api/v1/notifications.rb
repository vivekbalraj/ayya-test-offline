module API
  module V1
    class Notifications < Grape::API
      include API::V1::Defaults

      resource :notifications do
        desc "Return all published notifications"
        get "", root: :notifications do
          page = params[:page]
          Notification.where(is_published: true).page(page)
        end
      end
    end
  end
end