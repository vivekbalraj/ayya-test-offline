ActiveAdmin.register Temple do

  permit_params :name, :temple_type, :information, :village, :latitude, :longitude

  config.clear_sidebar_sections!

  index do
    id_column
    column :name
    column :temple_type
    column :information
    column :village
    column :latitude
    column :longitude
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Temple" do
      f.input :name
      f.input :temple_type, :as => :select, :collection => ["Pathi", "Thangal"], :include_blank => false
      f.input :information
      f.input :village
      f.input :latitude
      f.input :longitude
    end
    f.actions
  end

end
