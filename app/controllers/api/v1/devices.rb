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
          registration_id = ["f-Adoej4whY:APA91bFe0t2VOE9MkEwidKLn6i80fFrImyszeQcSvyv_y52hsSJjuzFCbwV133IvnNxey6f9dYTTYvrqOjHdd2rpQhSNS1fzrwWvkoewHD-we3jOY65tBFuJkgDTMweGEBUOdndBTdob"]
          options = {
            "data" => {
              "message" => "hello"
            },
            "collapse_key" => "updated_state"
          }
          response = gcm.send_notification(registration_id, options)
        end
      end
    end
  end
end