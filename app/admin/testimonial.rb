ActiveAdmin.register Testimonial do

  permit_params :name, :village, :text

  config.clear_sidebar_sections!

  index do
    id_column
    column :name
    column :village
    column :text
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Label" do
      f.input :name
      f.input :village
      f.input :text
    end
    f.actions
  end

end
