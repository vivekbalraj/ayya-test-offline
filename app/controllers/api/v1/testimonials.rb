module API
  module V1
    class Testimonials < Grape::API
      include API::V1::Defaults

      resource :testimonials do
        desc "Return all testimonials"
        get "", root: :testimonials do
          Testimonial.all
        end
      end
    end
  end
end