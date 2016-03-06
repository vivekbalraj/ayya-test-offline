module API
  module V1
    class Devices < Grape::API
      include API::V1::Defaults

      resource :devices do
        desc "create a device"
        post do
          Device.find_or_create_by(token: params[:token], platform: params[:platform])
        end
      end

      resource :devices do
        get do
          gcm = GCM.new("AIzaSyDi8ducYJNid4NQUKm04HzmDrdScGqO1NE")
          registration_id = Device.all().map(&:token)
          options = {
            "data" => {
              "message" => "அய்யா வைகுண்டர்",
              "summaryText" => "அய்யா வைகுண்டர்",
              "title" => "அய்யா 1008",
              "style" => "picture",
              "picture" => "http://36.media.tumblr.com/c066cc2238103856c9ac506faa6f3bc2/tumblr_nmstmqtuo81tssmyno1_1280.jpg"
            },
            "collapse_key" => "updated_state"
          }
          response = gcm.send_notification(registration_id, options)
        end
      end
    end
  end
end