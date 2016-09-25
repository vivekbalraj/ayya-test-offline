ActiveAdmin.register User do

  permit_params :name, :email, :mobile, :gender, :birthday, :facebook_id

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :mobile
    column :gender
    column :birthday
    column :facebook_id
    column :current_sign_in_at
    column :sign_in_count
    column :created_at
    actions
  end

  filter :email
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at

end
