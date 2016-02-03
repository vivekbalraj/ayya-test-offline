module API
  module V1
    class Temples < Grape::API
      include API::V1::Defaults

      resource :temples do
        desc "Return all temples"
        get "", root: :temples do
          Temple.all
        end

        desc "Return a temple"
        params do
          requires :id, type: String, desc: "ID of the temple"
        end
        get ":id", root: "temple" do
          Temple.where(id: permitted_params[:id]).first!
        end
      end
    end
  end
end