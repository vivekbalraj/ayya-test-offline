ActiveAdmin.register Event do

  permit_params :name, :description, :date, :tamil_month, :tamil_date, :temple_id

  filter :temple
  filter :date
  filter :tamil_month, :as => :select
  filter :tamil_date, :in => 1..31

  index do
    id_column
    column :name
    column :date
    column :tamil_month
    column :tamil_date
    column :temple
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Event" do
      f.input :name
      f.input :temple
      f.input :date, as: :string
      f.input :tamil_date, :in => 1..31
      f.input :tamil_month, :as => :select, :collection => ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"]
      f.input :description
    end
    f.actions
  end

end
