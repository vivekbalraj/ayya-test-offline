module API
  module V1
    class Base < Grape::API
      mount API::V1::Temples
      mount API::V1::Events
      mount API::V1::Testimonials
      mount API::V1::Devices
      mount API::V1::Notifications
      mount API::V1::Cars
      mount API::V1::Activities
    end
  end
end
