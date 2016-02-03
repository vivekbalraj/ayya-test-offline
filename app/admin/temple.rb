ActiveAdmin.register Temple do

  permit_params :name, :temple_type, :information

  config.clear_sidebar_sections!

  index do
    id_column
    column :name
    column :temple_type
    column :information
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Temple" do
      f.input :name
      f.input :temple_type, :as => :select, :collection => ["Pathi", "Thangal"], :include_blank => false
      f.input :information
    end
    f.actions
  end

end
