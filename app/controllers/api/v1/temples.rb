module API
  module V1
    class Temples < Grape::API
      include API::V1::Defaults

      resource :temples do
        desc "Return all temples"
        get "", root: :temples do
          Temple.where(is_published: true).includes(:events).as_json(include: :events, :methods => [:images])
        end

        desc "Return by temple types"
        get "/type", root: :temples do
          Temple.where(is_published: true, temple_type: params[:temple_type]).includes(:events).as_json(include: :events, :methods => [:images])
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