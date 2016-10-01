module API
  module V1
    class Temples < Grape::API
      include API::V1::Defaults

      resource :temples do
        desc "Return all temples"
        get "", root: :temples do
          temples = Temple.select('id, name, information, temple_type, village, district, latitude, longitude, founded_at, country, state, taluk, pincode, street_address, is_primary_thangal, is_book_read, book_month, is_published, priest_name, facebook_page_url, img1_file_name, img2_file_name, img3_file_name, views').where(is_published: true).includes(:events, :cars).as_json(include: [:events, :cars], :methods => [:images, :thumb])
        end

        desc "Return by temple types"
        params do
          requires :temple_type, type: String, desc: "type of the temple"
        end
        get "/type", root: :temples do
          Temple.where(is_published: true, temple_type: params[:temple_type]).includes(:events).as_json(include: :events, :methods => [:images, :thumb])
        end

        desc "Return temples by district"
        params do
          requires :temple_type, type: String, desc: "type of the temple"
          requires :district, type: String, desc: "district of the temple"
        end
        get "/district", root: :temples do
          Temple.where(is_published: true, temple_type: params[:temple_type], district: params[:district]).includes(:events).as_json(include: :events, :methods => [:images])
        end

        desc "Return all districts in which temples are present"
        get "/districts", root: :temples do
          Temple.uniq.pluck(:district)
        end

        desc "Increase the count of temple by one"
        params do
          requires :id, type: String, desc: "ID of the temple"
        end
        post "/view-temple", root: :temple do
          Temple.find(params[:id]).viewed.save
        end

        desc "Return a temple"
        params do
          requires :id, type: String, desc: "ID of the temple"
        end
        get ":id", root: "temple" do
          Temple.where(id: permitted_params[:id]).first!
        end
      end

      resource :temples do
        desc "create a temple"
        post do
          temple = Temple.create(name: params[:name], founded_at: params[:founded_at], book_month: params[:book_month], contact_person: params[:contact_person], mobile_number: params[:mobile_number], village: params[:village], taluk: params[:taluk], district: params[:district], latitude: params[:latitude], longitude: params[:longitude], pincode: params[:pincode], street_address: params[:street_address], information: params[:information], facebook_page_url: params[:facebook_page_url], priest_name: params[:priest_name], device_no: params[:device_no], contact_email: params[:contact_email])
          temple.cars = Car.find(params[:cars])
          temple.img1 = ActionDispatch::Http::UploadedFile.new(params[:image1]) if params[:image1].present?
          temple.img2 = ActionDispatch::Http::UploadedFile.new(params[:image2]) if params[:image2].present?
          temple.img3 = ActionDispatch::Http::UploadedFile.new(params[:image3]) if params[:image3].present?
          temple.save
          TempleNotifier.send_temple_email(temple).deliver
        end
      end
    end
  end
end
