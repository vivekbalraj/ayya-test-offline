module API
  module V1
    class Cars < Grape::API
      include API::V1::Defaults

      resource :cars do
        desc "list all cars"
        get "", root: :cars do
          Car.all
        end
      end
    end
  end
end
