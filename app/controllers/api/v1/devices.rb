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
    end
  end
end
