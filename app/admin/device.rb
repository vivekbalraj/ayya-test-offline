ActiveAdmin.register Device do

  permit_params :token, :enabled, :platform

  filter :enabled, :as => :select
  filter :platform, :as => :select

  # index do
  #   id_column
  #   column :token
  #   column :enabled
  #   column :platform
  #   actions
  # end

end
