ActiveAdmin.register Device do

  permit_params :token, :enabled, :platform

  # index do
  #   id_column
  #   column :token
  #   column :enabled
  #   column :platform
  #   actions
  # end

end
