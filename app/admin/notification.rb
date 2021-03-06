ActiveAdmin.register Notification do

  permit_params :message, :title, :picture, :is_published, :date

  config.clear_sidebar_sections!

  index do
    id_column
    column :message
    column :title
    column :picture_file_name
    column :is_published
    column :date
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Notification" do
      f.input :title
      f.input :message
      f.input :date, as: :string
      f.input :is_published, as: :select, :include_blank => false
      f.input :picture, :as => :file, :hint => image_tag(f.object.picture.url)
    end
    f.actions
  end

end
