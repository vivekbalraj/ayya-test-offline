module API
  module V1
    class Users < Grape::API
      include API::V1::Defaults

       resources :users do
        desc "Authenticate user and return user object, access token"
        params do
          requires :email, :type => String, :desc => "User email"
          requires :password, :type => String, :desc => "User password"
        end
        post 'authenticate' do
          email = params[:email]
          password = params[:password]

          if email.nil? or password.nil?
            error!({:error_code => 404, :error_message => "Invalid email or password."}, 401)
            return
          end

          user = User.find_by(email: email.downcase)
          if user.nil?
            error!({:error_code => 404, :error_message => "Invalid email or password."}, 401)
            return
          end

          if !user.valid_password?(password)
            error!({:error_code => 404, :error_message => "Invalid email or password."}, 401)
            return
          else
            user.ensure_authentication_token!
            user.save
            status(201)
            {
              status: 'ok',
              token: user.authentication_token
            }
          end
        end


        desc "Register user and return user object, access token"
        params do
          requires :name, :type => String, :desc => "Name"
          requires :email, :type => String, :desc => "Email"
          requires :password, :type => String, :desc => "Password"
        end
        post 'register' do
          user = User.new(
            name:       params[:name],
            password:   params[:password],
            email:      params[:email]
          )

          if user.valid?
            user.save
            return user
          else
            error!({:error_code => 404, :error_message => "Invalid email or password."}, 401)
          end
        end

        desc "Logout user and return user object, access token"
        params do
          requires :token, :type => String, :desc => "Authenticaiton Token"
        end
        delete 'logout' do

          user = User.find_by(authentication_token: params[:token])

          if !user.nil?
            user.remove_authentication_token!
            status(200)
            {
              status: 'ok',
              token: user.authentication_token
            }
          else
            error!({:error_code => 404, :error_message => "Invalid token."}, 401)
          end
        end
      end
    end
  end
end