module API
  module V1
    class Events < Grape::API
      include API::V1::Defaults

      resource :events do
        desc "Return all events"
        get "", root: :events do
          Event.all.includes(:temple).as_json(include: :temple)
        end
      end
    end
  end
end