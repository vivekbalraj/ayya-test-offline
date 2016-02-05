module API
  module V1
    class Base < Grape::API
      mount API::V1::Temples
      mount API::V1::Events
      mount API::V1::Testimonials
    end
  end
end