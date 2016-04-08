module API
  module V1
    class Activities < Grape::API
      include API::V1::Defaults

      resource :activities do
        desc "Get all activities"
        get "", root: :activities do
          page = params[:page]
          PublicActivity::Activity.all.page(page)
        end
      end
    end
  end
end
